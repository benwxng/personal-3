import { getBlogPosts } from "app/writings/utils";

export async function GET() {
  let allBlogs = await getBlogPosts();
  const baseUrl = "https://portfolio-blog-starter.vercel.app";

  const itemsXml = allBlogs
    .map(
      (post) => `
        <item>
          <title>${post.metadata.title}</title>
          <link>${baseUrl}/writings/${post.slug}</link>
          <description>${post.metadata.summary}</description>
          <pubDate>${new Date(
            post.metadata.publishedAt
          ).toUTCString()}</pubDate>
        </item>
      `
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>My Writings</title>
        <link>${baseUrl}</link>
        <description>My latest writings</description>
        ${itemsXml}
      </channel>
    </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
