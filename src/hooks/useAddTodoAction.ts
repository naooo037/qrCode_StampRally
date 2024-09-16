import { TodoApi, TodoSchema } from "@/.openapi/api";

import { useTodoStore } from "@/stores/todoStore";

export const useAddTodoAction = () => {
  const todoApi = new TodoApi();
  const addTodoAction = useTodoStore(state => state.add);

  return async (todo: TodoSchema) => {
    await todoApi.postTodo(todo)
      .then((response) => {
        if (!response.data.todo) {
          return
        }
        addTodoAction(response.data.todo);
      });
  }
}