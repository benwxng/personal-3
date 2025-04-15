import { formatDate, getBlogPosts } from "app/writings/utils";
import { notFound } from "next/navigation";

export const baseUrl = "https://portfolio-blog-starter.vercel.app";

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

  let { title, publishedAt: publishedTime, description } = post.metadata;
  let ogImage = `${baseUrl}/writings/${post.slug}/og`;

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
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
            description: post.metadata.description,
            author: {
              "@type": "Person",
              name: "Your Name",
            },
            url: `${baseUrl}/writings/${post.slug}`,
          }),
        }}
      />
      <h1 className="font-bold text-3xl font-serif mb-2">
        {post.metadata.title}
      </h1>
      <div className="text-sm text-gray-600 mb-8">
        {formatDate(post.metadata.publishedAt)}
      </div>
      <article className="prose prose-gray">{post.content}</article>
    </section>
  );
}
