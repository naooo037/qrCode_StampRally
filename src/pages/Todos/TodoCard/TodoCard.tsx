import { FC } from 'react'
import { Base, CheckBox, FaCircleInfoIcon, Stack, Text, TextLink } from 'smarthr-ui'
import styled from 'styled-components'

import { TodoSchema } from '@/.openapi/api'

import { TodoDeleteButton } from '../../../components/TodoDeleteButton'

type Props = {
	todo: TodoSchema
	handleUpdateCompleate: () => void
	date: string
}

export const TodoCard: FC<Props> = ({ todo, handleUpdateCompleate, date }) => (
	<CardBase>
		<CardMainContent>
			<MyCheckBox onClick={handleUpdateCompleate} checked={todo.completed} />
			<TextDiv>
				<Text as='h2'>{todo.title}</Text>
				<Text as='p'>{todo.description}</Text>
				<Text as='p' size='M'>
					{date}
				</Text>
			</TextDiv>
		</CardMainContent>
		<Stack>
			<TodoDeleteButton id={todo.ID || ''} title={todo.title || ''} />
			<TextLink href={`/todo/${todo.ID}`} prefix={<FaCircleInfoIcon />}>
				詳細を開く
			</TextLink>
		</Stack>
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
const CardMainContent = styled.div`
	display: contents;
`

const MyCheckBox = styled(CheckBox)`
	margin: 10px;

	transform: scale(1.5);
`

const TextDiv = styled.div`
	overflow: hidden;
	width: 80%;

	* {
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	h2 {
		margin-bottom: 5px;
	}
`
