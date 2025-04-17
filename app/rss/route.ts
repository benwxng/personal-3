import { getBlogPosts } from "app/writings/utils";
import { baseUrl } from "app/config";

export async function GET() {
  const allBlogs = getBlogPosts();

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
        <title>ben wang</title>
        <link>${baseUrl}</link>
        <description>my personal site</description>
        ${itemsXml}
      </channel>
    </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
