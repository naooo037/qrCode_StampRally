import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useParams } from 'react-router-dom'

import { ErrorFallback } from '@/components/ErrorFallback'
import { useFetchTodo } from '@/hooks/useFetchTodo'

import { Todo } from './Todo'

const TodoAdapter = () => {
	const { id } = useParams<{ id: string }>()
	const todo = useFetchTodo(id || '')

	const breadItems = [
		{
			text: 'ホーム',
			href: '/',
		},
		{
			text: 'Todo一覧',
			href: '/todo',
		},
		{
			text: 'Todo詳細',
			href: `/todo/${id}`,
		},
	]

	return todo ? <Todo todo={todo} breadItems={breadItems} /> : null
}

export const TodoAdapterErrorBoundary: FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<TodoAdapter />
		</ErrorBoundary>
	)
}
