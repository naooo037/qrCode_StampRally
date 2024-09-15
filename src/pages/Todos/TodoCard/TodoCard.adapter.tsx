import { FC } from 'react'

import { TodoSchema } from '@/.openapi/api'

import { useUpdateComplatedTodoAction } from '@/hooks/useUpdateComplatedTodoAction'

import { TodoCard } from './TodoCard'

type Props = {
	todo: TodoSchema
}
export const TodoCardAdapter: FC<Props> = ({ todo }) => {
	const useUpdateCompleateAction = useUpdateComplatedTodoAction(todo)

	const date = dateFormate(todo.CreatedAt || '')

	const handleUpdateCompleate = () => {
		useUpdateCompleateAction(todo.ID!, !todo.completed)
	}

	return <TodoCard todo={todo} handleUpdateCompleate={handleUpdateCompleate} date={date} />
}

const dateFormate = (date: string) => {
	const d = new Date(date)
	return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
}
