import { BlogPosts } from "app/components/posts";
import {
  AnimatedHeading,
  AnimatedContent,
} from "app/components/animated-section";

export const metadata = {
  title: "writings",
  description: "Read my writings.",
};

export default function Page() {
  return (
    <section>
      <AnimatedHeading>My Writings</AnimatedHeading>
      <AnimatedContent>
        <BlogPosts />
      </AnimatedContent>
    </section>
  );
}
