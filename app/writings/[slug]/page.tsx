import { formatDate, getBlogPosts } from "app/writings/utils";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { baseUrl } from "app/config";

export async function generateStaticParams() {
  let posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  let { title, publishedAt: publishedTime, summary } = post.metadata;
  let description = summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/writings/${post.slug}`,
      images: [
        {
          url: "/personalOGimage.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/personalOGimage.png"],
    },
  };
}

export default function Writing({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            summary: post.metadata.summary,
            author: {
              "@type": "Person",
              name: "Ben Wang",
            },
            url: `${baseUrl}/writings/${post.slug}`,
          }),
        }}
      />
      <h1 className="text-3xl font-medium mb-2">{post.metadata.title}</h1>
      <div className="text-sm text-gray-600 mb-4">
        {formatDate(post.metadata.publishedAt)}
      </div>
      <div className="text-sm text-gray-600 mb-4">{post.metadata.summary}</div>
      <article className="prose prose-gray">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
