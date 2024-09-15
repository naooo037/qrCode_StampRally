import { FC } from 'react'

import { TodoSchema } from '@/.openapi/api'

import { useUpdateComplatedTodoAction } from '@/hooks/useUpdateComplatedTodoAction'
import { useTodoStore } from '@/stores/todoStore'

import { TodoCard } from './TodoCard'

type Props = {
	todo: TodoSchema
}
export const TodoCardAdapter: FC<Props> = ({ todo }) => {
	const useUpdateCompleateAction = useUpdateComplatedTodoAction(todo)
	const updateComplate = useTodoStore((state) => state.updateComplate)

	const handleUpdateCompleate = () => {
		useUpdateCompleateAction(todo.ID!, !todo.completed)
		updateComplate(todo.ID!, !todo.completed)
	}

	return <TodoCard todo={todo} handleUpdateCompleate={handleUpdateCompleate} />
}
