import { create } from 'zustand';

type State = {
  userId: string | undefined;
  name: string | undefined;
  rallyId: string | undefined;
};

type Action = {
  setUserId: (userId: string) => void;
  setName: (name: string) => void;
  setRallyId: (rallyId: string) => void;
};

export const useTodoStore = create<State & Action>()((set) => ({
  userId: undefined,
  name: undefined,
  rallyId: undefined,

  setUserId: (userId) => set({ userId }),
  setName: (name) => set({ name }),
  setRallyId: (rallyId) => set({ rallyId }),
}));
