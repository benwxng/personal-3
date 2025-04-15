import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Ben Wang</h1>
      <p className="mb-4">
        currently cs + math @ swarthmore <br />
        i'm interested in building products that help people live better lives.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
