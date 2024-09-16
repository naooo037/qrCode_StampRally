import { FC, useState } from 'react'

import { AddTodoButton } from './AddTodoButton'

export const AddTodoButtonAdapter: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	return <AddTodoButton isOpen={isOpen} setIsOpen={setIsOpen} />
}
