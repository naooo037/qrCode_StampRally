import { TodoApi } from "@/.openapi/api"

export const useDeleteTodoAction = (id: string) => {
  const todoApi = new TodoApi()
  todoApi.deleteTodo(id)
}