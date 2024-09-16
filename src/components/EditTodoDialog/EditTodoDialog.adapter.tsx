import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TodoSchema } from '@/.openapi/api'

import { useAddTodoAction } from '@/hooks/useAddTodoAction'

import { EditTodoDialog } from './EditTodoDialog'

type Props = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	actionText: string
	dialogTitle: string
	todo?: TodoSchema
}

export const EditTodoDialogAdapter: FC<Props> = ({
	isOpen,
	setIsOpen,
	actionText,
	dialogTitle,
	todo,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TodoSchema>({
		defaultValues: {
			completed: todo?.completed || false,
			...todo,
		},
	})
	const useAddTodo = useAddTodoAction()

	const onClickAction: SubmitHandler<TodoSchema> = (data) => {
		useAddTodo(data)
		setIsOpen(false)
	}
	const onClickClose = () => {
		setIsOpen(false)
	}

	return (
		<EditTodoDialog
			isOpen={isOpen}
			title={dialogTitle}
			actionText={actionText}
			onClickAction={handleSubmit(onClickAction)}
			onClickClose={onClickClose}
			register={register}
			errors={errors}
		/>
	)
}
