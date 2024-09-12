import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@/components/ErrorFallback'
import { SigninAdapter } from '@/components/SigninAdapter'

import { Todo } from './Todo'

const TodoAdapter = () => {
	return <Todo />
}

export const TodoAdapterErrorBoundary: FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<SigninAdapter>
				<TodoAdapter />
			</SigninAdapter>
		</ErrorBoundary>
	)
}
