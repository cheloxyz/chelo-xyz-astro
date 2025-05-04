// src/utils/getPosts.ts
import { getCollection } from "astro:content";
import type { Post } from "../types/post";

export async function getSortedBlogPosts() {
    const posts = await getCollection("blog");
    return posts.sort(
        (a: Post, b: Post) => b.data.date.valueOf() - a.data.date.valueOf()
    );
}

export async function getBlogPost(slug: string) {
    const posts = await getCollection("blog");
    return posts.find((post: Post) => post.id === slug);
}