import { FC, useState } from 'react'

import { TodoSchema } from '@/.openapi/api'

import { useAddTodoAction } from '@/hooks/useAddTodoAction'

import { AddTodoButton } from './AddTodoButton'

export const AddTodoButtonAdapter: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const useAddTodo = useAddTodoAction()
	const onSubmit = (data: TodoSchema) => {
		useAddTodo(data)
	}

	return <AddTodoButton isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit} />
}
