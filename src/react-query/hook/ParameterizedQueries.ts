import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const ParameterizedQueries = (userId: number | undefined) =>
  useQuery<Post[], Error>({
    queryKey: userId ? ["todos", userId] : ["todos"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/todos", {
          params: {
            userId,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 1000,
  });

export default ParameterizedQueries;
