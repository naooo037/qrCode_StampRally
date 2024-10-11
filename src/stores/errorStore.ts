import { create } from 'zustand'

export type ErrorSchema = {
	status: number
	title: string
	message: string
}

type State = {
	error: ErrorSchema | undefined
}

type Action = {
	setError: (error: ErrorSchema) => void
	clearError: () => void
}

export const useErrorStore = create<State & Action>()((set) => ({
	error: undefined,

	setError: (error) => set({ error }),
	clearError: () => set({ error: undefined }),
}))
