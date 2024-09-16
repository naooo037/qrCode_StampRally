import { useEffect } from "react";

import { TodoApi } from "@/.openapi/api";

import { useTodoStore } from "@/stores/todoStore";

export const useFetchTodo = (id: string) => {
  const todo = useTodoStore((state) => state.todo);
  const setTodo = useTodoStore((state) => state.setTodo);

  const todoApi = new TodoApi();

  useEffect(() => {
    setTodo(undefined);
    (async () => {
      const response = await todoApi.getTodoId(id);
      setTodo(response.data.todo);
    })();
  }, []);

  return todo;
}