import { FC, useState } from 'react'

import { TodoSchema } from '@/.openapi/api'

import { useUpdateTodoAction } from '@/hooks/useUpdateTodoAction'

import { UpdateTodoButton } from './UpdateTodoButton'

type Props = {
	todo: TodoSchema
}

export const UpdateTodoButtonAdapter: FC<Props> = ({ todo }) => {
	const [isOpen, setIsOpen] = useState(false)

	const useUpdateTodo = useUpdateTodoAction()
	const onSubmit = (data: TodoSchema) => {
		useUpdateTodo(data)
	}
	return <UpdateTodoButton isOpen={isOpen} setIsOpen={setIsOpen} todo={todo} onSubmit={onSubmit} />
}
