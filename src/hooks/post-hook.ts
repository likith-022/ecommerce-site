import useSWR from "swr";
import { getAllPosts } from "../services/post-service";

const usePosts = () => {
  const { data, error, isLoading } = useSWR(
    "posts",
    getAllPosts
  );

  return {
    posts: data?.posts ?? [],
    total: data?.total ?? 0,
    isLoading,
    error,
  };
};

export default usePosts;
