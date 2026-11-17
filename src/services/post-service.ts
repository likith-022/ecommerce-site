
import type { PostsResponse } from "../type/post-type";

export const getAllPosts = async (): Promise<PostsResponse> => {
  const response = await fetch("https://dummyjson.com/posts");

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch posts");
  }

  return data;
};
