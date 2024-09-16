import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ActionDialog, FormControl, Input, Textarea } from 'smarthr-ui'
import styled from 'styled-components'

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
				maxLength={100}
				error={errors.title !== undefined}
				{...register('title', {
					required: { value: true, message: 'タイトルは必須です' },
					maxLength: { value: 30, message: 'タイトルは30文字までです' },
				})}
			/>
		</FormControl>
		<FormControl title='説明' errorMessages={errors.description?.message}>
			<DescriptionTextarea
				error={errors.description !== undefined}
				maxLetters={100}
				maxLength={500}
				rows={5}
				{...register('description', {
					maxLength: { value: 100, message: '説明は100文字までです' },
				})}
			/>
		</FormControl>
	</ActionDialog>
)

const DescriptionTextarea = styled(Textarea)`
	width: 100%;
	resize: none;
`
