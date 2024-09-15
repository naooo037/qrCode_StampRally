import { TodoApi } from "@/.openapi/api"

import { useTodoStore } from "@/stores/todoStore"

export const useDeleteTodoAction = () => {
  const todoApi = new TodoApi()
  const deleteTodo = useTodoStore((state) => state.delete)

  return async (id: string) => {
    await todoApi.deleteTodo(id)
      .then(() => {
        deleteTodo(id)
      })
  }
}