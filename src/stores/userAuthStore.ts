import { create } from 'zustand';

import { UserAuthData } from '@/.openapi/api';

type State = {
  user: UserAuthData;
  signin: boolean | undefined;
};

type Action = {
  userSignin: (success: boolean) => void;
  userSignout: () => void;
};

export const useUserAuthStore = create<State & Action>()((set) => ({
  user: {
    username: '',
    password: ''
  },
  signin: undefined,
  userSignin: (success: boolean) => {
    set({ signin: success })
  },
  userSignout: () => {
    set({ user: { username: '', password: '' } })
  },
}));
