import { FC } from 'react'

import { TodoSchema } from '@/.openapi/api'

type Props = {
	todos: TodoSchema[]
}

export const Todos: FC<Props> = ({ todos }) => {
	return (
		<div>
			<h1>Todo</h1>
			{todos.map((todo, index) => (
				<div key={`${todo.id} ${index}`}>
					<h2>{todo.title}</h2>
				</div>
			))}
		</div>
	)
}
