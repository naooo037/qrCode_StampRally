import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ActionDialog, FormControl, Input } from 'smarthr-ui'

import { TodoSchema } from '@/.openapi/api'

type Props = {
	isOpen: boolean
	title: string
	actionText: string
	onClickAction: () => void
	onClickClose: () => void
	register: UseFormRegister<TodoSchema>
	errors: FieldErrors<TodoSchema>
}

export const EditTodoDialog: FC<Props> = ({
	isOpen,
	title,
	actionText,
	onClickAction,
	onClickClose,
	register,
	errors,
}) => (
	<ActionDialog
		isOpen={isOpen}
		title={title}
		actionText={actionText}
		onClickAction={onClickAction}
		onClickClose={onClickClose}
		width={'500px'}
	>
		<FormControl
			title='タイトル'
			statusLabelProps={{ type: 'red', children: '必須' }}
			errorMessages={errors.title?.message}
			supplementaryMessage='30文字まで'
		>
			<Input
				type='text'
				width={'100%'}
				error={errors.title !== undefined}
				{...register('title', {
					required: { value: true, message: 'タイトルは必須です' },
					maxLength: { value: 30, message: 'タイトルは30文字までです' },
				})}
			/>
		</FormControl>
	</ActionDialog>
)
