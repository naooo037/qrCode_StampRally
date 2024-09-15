import { TodoApi, TodoSchema } from "@/.openapi/api";

export const useUpdateComplatedTodoAction = (todo: TodoSchema) => {
  const todoApi = new TodoApi();

  return async (id: string, completed: boolean) => {
    await todoApi.putTodo(id, { ...todo, completed });
  }
}