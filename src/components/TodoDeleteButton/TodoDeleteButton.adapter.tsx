import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDeleteTodoAction } from '@/hooks/useDeleteTodoAction'

import { TodoDeleteButton } from './TodoDeleteButton'

type Props = {
	id: string
	title: string
	isDetail?: boolean
}
export const TodoDeleteButtonAdapter: FC<Props> = ({ id, title, isDetail }) => {
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()

	const useDeleteTodo = useDeleteTodoAction()

	const onClickAction = () => {
		useDeleteTodo(id)
		setIsOpen(false)

		if (isDetail) {
			navigate('/todo')
		}
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
