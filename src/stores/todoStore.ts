import { create } from 'zustand';

import { TodoSchema } from '@/.openapi/api';


type State = {
  todos: TodoSchema[] | undefined;
};

type Action = {
  setTodos: (todos: TodoSchema[] | undefined) => void;
  update: (id: string, currentTodo: TodoSchema) => void;
  delete: (id: string) => void;
  add: (todo: TodoSchema) => void;
};

export const useTodoStore = create<State & Action>()((set) => ({
  todos: undefined,
  setTodos: (todos) => set({ todos }),
  update: (id, currentTodo) => {
    set((state) => {
      return {
        todos: state.todos!.map((todo) => {
          if (todo.ID === id) {
            return { ...currentTodo };
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
  },
  add: (todo) => {
    set((state) => {
      return {
        todos: [todo, ...state.todos!]
      }
    });
  }
}));
