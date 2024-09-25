import { FC } from 'react'
import { Button } from 'smarthr-ui'
import styled from 'styled-components'

import { TodoSchema } from '@/.openapi/api'

import { EditTodoDialog } from '@/components/EditTodoDialog'

type Props = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	onSubmit: (data: TodoSchema) => void
}

export const AddTodoButton: FC<Props> = ({ isOpen, setIsOpen, onSubmit }) => (
	<>
		<AddButton variant='primary' onClick={() => setIsOpen(true)}>
			追加
		</AddButton>
		<EditTodoDialog
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			dialogTitle='Todoの追加'
			actionText='追加'
			submitAction={onSubmit}
		/>
	</>
)

const AddButton = styled(Button)`
	height: fit-content;
	width: 124px;
`
