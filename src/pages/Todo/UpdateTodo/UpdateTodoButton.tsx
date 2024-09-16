import { FC } from 'react'
import { Button } from 'smarthr-ui'
import styled from 'styled-components'

import { TodoSchema } from '@/.openapi/api'

import { EditTodoDialog } from '@/components/EditTodoDialog'

type Props = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	todo: TodoSchema
	onSubmit: (data: TodoSchema) => void
}

export const UpdateTodoButton: FC<Props> = ({ isOpen, setIsOpen, todo, onSubmit }) => (
	<>
		<UpdateButton variant='primary' onClick={() => setIsOpen(true)}>
			編集
		</UpdateButton>
		<EditTodoDialog
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			dialogTitle='Todoの追加'
			actionText='追加'
			todo={todo}
			submitAction={onSubmit}
		/>
	</>
)

const UpdateButton = styled(Button)`
	height: fit-content;
	width: 124px;
`
