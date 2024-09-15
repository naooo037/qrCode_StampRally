import { create } from 'zustand';

import { TodoSchema } from '@/.openapi/api';


type State = {
  todos: TodoSchema[] | undefined;
};

type Action = {
  setTodos: (todos: TodoSchema[] | undefined) => void;
  updateComplate: (id: string, completed: boolean) => void;
  delete: (id: string) => void;
};

export const useTodoStore = create<State & Action>()((set) => ({
  todos: undefined,
  setTodos: (todos) => set({ todos }),
  updateComplate: (id, completed) => {
    set((state) => {
      return {
        todos: state.todos!.map((todo) => {
          if (todo.ID === id) {
            return { ...todo, completed };
          }
          return todo;
        })
      }
    });
  },
  delete: (id) => {
    set((state) => {
      return {
        todos: state.todos!.filter((todo) => todo.ID !== id)
      }
    });
  }
}));
