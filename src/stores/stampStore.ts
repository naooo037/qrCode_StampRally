import { create } from 'zustand'

import { GetUserStamps200ResponseInner } from '@/.openapi/api'


type State = {
  stamps: GetUserStamps200ResponseInner[] | undefined
}

type Action = {
  setStamps: (stamps: GetUserStamps200ResponseInner[]) => void
}

export const useStampStore = create<State & Action>()((set) => ({
  stamps: undefined,

  setStamps: (stamps) => set({ stamps }),
}))
