import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const UseTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ["toods"],
    queryFn: fetchTodos,
    // staleTime: 10 * 1000,
  });
};

export default UseTodos;
