import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "writings",
  description: "Read my writings.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Writings
      </h1>
      <BlogPosts />
    </section>
  );
}
