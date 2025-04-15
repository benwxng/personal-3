import { BlogPosts } from "app/components/posts";
import {
  AnimatedHeading,
  AnimatedContent,
} from "./components/animated-section";

export default function Page() {
  return (
    <section>
      <AnimatedHeading>Ben Wang</AnimatedHeading>
      <AnimatedContent>
        <p className="mb-4">
          currently cs + math @ swarthmore <br />
          i'm interested in building products that help people live better
          lives.
        </p>
        <div className="my-8">
          <BlogPosts />
        </div>
      </AnimatedContent>
    </section>
  );
}
