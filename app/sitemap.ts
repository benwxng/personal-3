import { getBlogPosts } from "app/writings/utils";
import { headers } from "next/headers";
import { baseUrl } from "./config";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/writings/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/writings"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
