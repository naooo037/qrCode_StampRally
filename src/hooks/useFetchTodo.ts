import { useEffect, useState } from "react";

import { TodoApi, TodoSchema } from "@/.openapi/api";

export const useFetchTodo = (id: string) => {
  const [todos, setTodos] = useState<TodoSchema | undefined>(undefined);

  const todoApi = new TodoApi();

  useEffect(() => {
    (async () => {
      const response = await todoApi.getTodoId(id);
      setTodos(response.data.todo);
    })();
  }, []);

  return todos;
}