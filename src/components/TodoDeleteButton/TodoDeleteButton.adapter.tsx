import { FC, useState } from 'react'

import { useDeleteTodoAction } from '@/hooks/useDeleteTodoAction'

import { TodoDeleteButton } from './TodoDeleteButton'

type Props = {
	id: string
	title: string
}
export const TodoDeleteButtonAdapter: FC<Props> = ({ id, title }) => {
	const [isOpen, setIsOpen] = useState(false)

	const useDeleteTodo = useDeleteTodoAction()

	const onClickAction = () => {
		useDeleteTodo(id)
		setIsOpen(false)
	}

	return (
		<TodoDeleteButton
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			title={title}
			onClickAction={onClickAction}
		/>
	)
}
