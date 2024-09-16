import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@/components/ErrorFallback'
import { useFetchTodos } from '@/hooks/useFetchTodos'

import { Todos } from './Todos'

const TodosAdapter = () => {
	const todos = useFetchTodos()

	const breadItems = [
		{
			text: 'ホーム',
			href: '/',
		},
		{
			text: 'Todo一覧',
			href: '/todo',
		},
	]

	return todos ? <Todos todos={todos} breadItems={breadItems} /> : null
}

export const TodosAdapterErrorBoundary: FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<TodosAdapter />
		</ErrorBoundary>
	)
}
