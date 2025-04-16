import { BlogPosts } from "app/components/posts";
import { AnimatedContent } from "app/components/animated-section";
import AnimatedLink from "app/components/AnimatedLink";

export const metadata = {
  title: "writings",
  description: "Read my writings.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tight">
        my writings
      </h1>
      <AnimatedContent>
        <BlogPosts />
        <div className="text-neutral-600 dark:text-neutral-400 mt-6">
          <div>most of my writing is directed to my younger self</div>
          <div className="mt-2">
            you can find more on substack &lt;
            <AnimatedLink href="https://benxwang.substack.com" external={true}>
              here
            </AnimatedLink>
            &gt;
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
