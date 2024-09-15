import { TodoApi } from "@/.openapi/api"

export const useDeleteTodoAction = () => {
  const todoApi = new TodoApi()
  return async (id: string) => {
    await todoApi.deleteTodo(id)
  }
}