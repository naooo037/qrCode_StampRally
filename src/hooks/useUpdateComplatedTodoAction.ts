import { TodoApi } from "@/.openapi/api";


export const useUpdateComplatedTodoAction = () => {
  const todoApi = new TodoApi();

  return async (id: string, completed: boolean) => {
    await todoApi.putTodo(id, { completed });
  }
}