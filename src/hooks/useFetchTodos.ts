import { TodoApi } from '@/.openapi/api';

export const useFetchTodos = async () => {
  const todoApi = new TodoApi();
  const response = await todoApi.getTodo();

  return response.data;
}