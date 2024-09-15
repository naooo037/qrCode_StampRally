import { FC } from 'react'
import { Base, CheckBox } from 'smarthr-ui'
import styled from 'styled-components'

import { TodoSchema } from '@/.openapi/api'

type Props = {
	todo: TodoSchema
	handleUpdateCompleate: () => void
}

export const TodoCard: FC<Props> = ({ todo, handleUpdateCompleate }) => (
	<CardBase>
		<MyCheckBox onClick={handleUpdateCompleate} checked={todo.completed} />
		<h2>{todo.title}</h2>
	</CardBase>
)

const CardBase = styled(Base)`
	margin: 10px;
	padding: 10px;

	display: flex;
	align-items: center;

	background-color: #f0f0f0;
`

const MyCheckBox = styled(CheckBox)`
	margin: 10px;

	transform: scale(1.5);
`
