import { FC } from 'react'

import { TodoSchema } from '@/.openapi/api'

import { dateFormate } from '@/feature/dateFormate'
import { useUpdateComplatedTodoAction } from '@/hooks/useUpdateComplatedTodoAction'

import { TodoCard } from './TodoCard'

type Props = {
	todo: TodoSchema
}
export const TodoCardAdapter: FC<Props> = ({ todo }) => {
	const useUpdateCompleateAction = useUpdateComplatedTodoAction(todo)

	const isUpdated = todo.CreatedAt !== todo.UpdatedAt
	const date = (() => {
		if (isUpdated) {
			return `更新日時: ${dateFormate(todo.UpdatedAt || '')}`
		}
		return `作成日時: ${dateFormate(todo.CreatedAt || '')}`
	})()

	const handleUpdateCompleate = () => {
		useUpdateCompleateAction(todo.ID!, !todo.completed)
	}

	return <TodoCard todo={todo} handleUpdateCompleate={handleUpdateCompleate} date={date} />
}
