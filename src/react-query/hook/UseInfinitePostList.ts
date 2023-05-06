import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface InfinitePost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface InfintePostQuery {
  pageSize: number;
}

const UseInfinitePostList = (query: InfintePostQuery) =>
  useInfiniteQuery<InfinitePost[], Error>({
    queryKey: ["post", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<InfinitePost[]>("https://jsonplaceholder.typicode.com/todos", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 1000,
    getNextPageParam: (lastPages, allPages) => {
      return lastPages.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default UseInfinitePostList;
