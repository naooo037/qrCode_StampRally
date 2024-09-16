import { useEffect } from "react";

import { TodoApi } from "@/.openapi/api";

import { useErrorStore } from "@/stores/errorStore";
import { useTodoStore } from "@/stores/todoStore";

export const useFetchTodo = (id: string) => {
  const todo = useTodoStore((state) => state.todo);
  const setTodo = useTodoStore((state) => state.setTodo);
  const setError = useErrorStore((state) => state.setError);

  const todoApi = new TodoApi();

  useEffect(() => {
    setTodo(undefined);
    (async () => {
      await todoApi.getTodoId(id)
        .then((response) => {
          setTodo(response.data.todo);
        })
        .catch((error) => {
          setError({
            status: error.response?.status,
            title: "Todoの取得に失敗しました。",
            message: "指定したIDに該当するTodoが見つかりませんでした。URLに指定したIDが正しいか確認してください。"
          })
        });
    })();
  }, []);

  return todo;
}