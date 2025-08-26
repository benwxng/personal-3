import { BlogPosts } from "app/components/posts";
import { AnimatedContent } from "./components/animated-section";
import AnimatedLink from "./components/AnimatedLink";

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tight">ben wang</h1>
      <AnimatedContent>
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          trying to be better than yesterday
        </p>
        <h2 className="text-lg font-medium mb-2">currently</h2>
        <ul className="list-none text-neutral-600 dark:text-neutral-400">
          <li>cs + math @ swarthmore</li>
          <li>
            community @{" "}
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
            <AnimatedLink
              href="https://f.inc/"
              className="text-neutral-600 dark:text-white/70"
              external={true}
            >
              founders, inc.
            </AnimatedLink>
          </li>
          <li>
            @{" "}
            <AnimatedLink
              href="https://perplexity.ai"
              className="text-neutral-600 dark:text-white/70"
              external={true}
            >
              perplexity
            </AnimatedLink>
          </li>
          <li>
            growth ops @{" "}
            <AnimatedLink
              href="https://whop.com/discover/kaizen-trading/"
              className="text-neutral-600 dark:text-white/70"
              external={true}
            >
              kaizen
            </AnimatedLink>{" "}
          </li>
          <li>sneaker botting</li>
          <li>4 star tennis recruit</li>
        </ul>

        <div className="mt-8">
          <BlogPosts />
        </div>
      </AnimatedContent>
    </section>
  );
}
