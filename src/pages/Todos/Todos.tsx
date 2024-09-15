import { FC } from 'react'

import { TodoSchema } from '@/.openapi/api'

import { TodoCard } from './TodoCard'

type Props = {
	todos: TodoSchema[]
}

export const Todos: FC<Props> = ({ todos }) => {
	return (
		<div>
			<h1>Todo</h1>
			{todos.map((todo, index) => (
				<TodoCard key={`${todo.ID} ${index}`} todo={todo} />
			))}
		</div>
	)
}
