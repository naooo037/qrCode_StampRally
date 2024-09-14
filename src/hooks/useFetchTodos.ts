import { useEffect, useState } from 'react';

import { TodoApi, TodoSchema } from '@/.openapi/api';

export const useFetchTodos = () => {
  const [todos, setTodos] = useState<TodoSchema[] | undefined>(undefined);

  const todoApi = new TodoApi();

  useEffect(() => {
    (async () => {
      const response = await todoApi.getTodo();
      setTodos(response.data.todos);
    })();
  }, []);

  return todos;
}