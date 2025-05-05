// src/utils/getPosts.ts
import { getCollection } from "astro:content";
import type { Post } from "../types/post";

export async function getSortedBlogPosts() {
    const posts = await getCollection("blog");
    return posts.sort(
        (a: Post, b: Post) => b.data.date.valueOf() - a.data.date.valueOf()
    );
}