import { create } from 'zustand';

type State = {
  userId: string | undefined;
};

type Action = {
  setUserId: (userId: string) => void;
};

export const useTodoStore = create<State & Action>()((set) => ({
  userId: undefined,

  setUserId: (userId) => set({ userId }),
}));
