import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@/components/ErrorFallback'
import { useFetchTodos } from '@/hooks/useFetchTodos'

import { Todos } from './Todos'

const TodosAdapter = () => {
	const todos = useFetchTodos()
	console.log(todos)
	return todos ? <Todos todos={todos} /> : null
}

export const TodosAdapterErrorBoundary: FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<TodosAdapter />
		</ErrorBoundary>
	)
}
