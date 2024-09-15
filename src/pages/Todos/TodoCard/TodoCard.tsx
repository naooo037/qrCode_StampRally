import { FC } from 'react'
import { Base, Button, CheckBox, Cluster } from 'smarthr-ui'
import styled from 'styled-components'

import { TodoSchema } from '@/.openapi/api'

type Props = {
	todo: TodoSchema
	handleUpdateCompleate: () => void
	date: string
}

export const TodoCard: FC<Props> = ({ todo, handleUpdateCompleate, date }) => (
	<CardBase>
		<Cluster>
			<MyCheckBox onClick={handleUpdateCompleate} checked={todo.completed} />
			<div>
				<h2>{todo.title}</h2>
				<p>{`CreatedAt: ${date}`}</p>
			</div>
		</Cluster>
		<Button variant='danger'>削除</Button>
	</CardBase>
)

const CardBase = styled(Base)`
	margin: 10px;
	padding: 10px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: #f0f0f0;

	div {
		align-items: center;
	}
`

const MyCheckBox = styled(CheckBox)`
	margin: 10px;

	transform: scale(1.5);
`
