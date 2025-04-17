import { formatDate, getBlogPosts } from "app/writings/utils";
import AnimatedLink from "./AnimatedLink";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div key={post.slug} className="flex flex-col space-y-1 mb-4">
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <div className="text-neutral-600 dark:text-neutral-400 w-[130px] tabular-nums mr-2">
                {formatDate(post.metadata.publishedAt, false)}
              </div>
              <div className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                <AnimatedLink href={`/writings/${post.slug}`}>
                  {post.metadata.title}
                </AnimatedLink>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
