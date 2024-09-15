import { TodoApi, TodoSchema } from "@/.openapi/api";

import { useTodoStore } from "@/stores/todoStore";

export const useUpdateComplatedTodoAction = (todo: TodoSchema) => {
  const todoApi = new TodoApi();
  const updateComplate = useTodoStore((state) => state.updateComplate)

  return async (id: string, completed: boolean) => {
    await todoApi.putTodo(id, { ...todo, completed })
      .then(() => {
        updateComplate(id, completed)
      });
  }
}