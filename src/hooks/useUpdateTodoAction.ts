import { TodoApi, TodoSchema } from "@/.openapi/api";

import { useTodoStore } from "@/stores/todoStore";

export const useUpdateTodoAction = () => {
  const todoApi = new TodoApi();
  const updateTodo = useTodoStore((state) => state.updateTodo)

  return async (todo: TodoSchema) => {
    if (!todo.ID) {
      return
    }

    await todoApi.putTodo(todo.ID, todo)
      .then((response) => {
        if (!response.data.todo) {
          return
        }
        updateTodo(response.data.todo);
      });
  }
}