import { useEffect } from 'react';

import { TodoApi } from '@/.openapi/api';

import { useTodoStore } from '@/stores/todoStore';

export const useFetchTodos = () => {
  const todos = useTodoStore((state) => state.todos);
  const setTodos = useTodoStore((state) => state.setTodos);

  const todoApi = new TodoApi();

  useEffect(() => {
    (async () => {
      const response = await todoApi.getTodo();
      setTodos(response.data.todos);
    })();
  }, []);

  return todos;
}