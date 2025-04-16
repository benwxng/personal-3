import { BlogPosts } from "app/components/posts";
import { AnimatedContent } from "./components/animated-section";
import AnimatedLink from "./components/AnimatedLink";

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tight">ben wang</h1>
      <AnimatedContent>
        <h2 className="text-lg font-medium mb-2">currently</h2>
        <ul className="list-none text-neutral-600 dark:text-neutral-400">
          <li>cs + math / tennis @ swarthmore</li>
          <li>campus growth @ perplexity</li>
          <li>
            building @{" "}
            <AnimatedLink
              href="https://www.swatsynthesis.info"
              className="text-neutral-600 dark:text-white/70"
              external={true}
            >
              synthesis
            </AnimatedLink>
          </li>
        </ul>

        <br />

        <h2 className="text-lg font-medium mb-2">past adventures</h2>
        <ul className="list-none text-neutral-600 dark:text-neutral-400">
          <li>
            growth ops @{" "}
            <AnimatedLink
              href="https://whop.com/discover/kaizen-trading/"
              className="text-neutral-600 dark:text-neutral-400"
              external={true}
            >
              kaizen
            </AnimatedLink>{" "}
          </li>
          <li>sneaker botting</li>
          <li>#1 tennis player in maryland</li>
        </ul>

        <div className="mt-8">
          <BlogPosts />
        </div>
      </AnimatedContent>
    </section>
  );
}
