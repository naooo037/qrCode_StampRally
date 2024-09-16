import { FC, ReactNode } from 'react'

import { useErrorStore } from '@/stores/errorStore'

import { MyErrorScreen } from './MyErrorScreen'

type Props = {
	children: ReactNode
}

export const ErrorScreenAdapter: FC<Props> = ({ children }) => {
	const error = useErrorStore((state) => state.error)
	if (error === undefined) {
		return <>{children}</>
	}
	return <MyErrorScreen {...error} />
}
