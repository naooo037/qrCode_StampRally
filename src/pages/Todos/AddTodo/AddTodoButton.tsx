import { FC } from 'react'
import { Button } from 'smarthr-ui'
import styled from 'styled-components'

import { EditTodoDialog } from '@/components/EditTodoDialog'

type Props = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddTodoButton: FC<Props> = ({ isOpen, setIsOpen }) => (
	<>
		<AddButton variant='primary' onClick={() => setIsOpen(true)}>
			追加
		</AddButton>
		<EditTodoDialog
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			dialogTitle='Todoの追加'
			actionText='追加'
		/>
	</>
)

const AddButton = styled(Button)`
	height: fit-content;
	width: 124px;
`
