import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@/components/ErrorFallback'
import { SigninAdapter } from '@/components/SigninAdapter'

import { Todos } from './Todos'

const TodosAdapter = () => {
	return <Todos />
}

export const TodosAdapterErrorBoundary: FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<SigninAdapter>
				<TodosAdapter />
			</SigninAdapter>
		</ErrorBoundary>
	)
}
