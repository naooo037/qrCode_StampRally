import { FC } from 'react'
import { Button } from 'smarthr-ui'

import { ConfirmDialog } from '@/components/ConfirmDialog'

type Props = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	title: string
	onClickAction: () => void
}

export const TodoDeleteButton: FC<Props> = ({ isOpen, setIsOpen, title, onClickAction }) => (
	<>
		<Button variant='danger' onClick={() => setIsOpen(true)}>
			削除
		</Button>
		<ConfirmDialog
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			title='Todoの削除'
			actionText='削除'
			onClickAction={onClickAction}
			actionTheme='danger'
		>
			<p>このTodoを削除しますか？この操作は元に戻せません。</p>
			<hr />
			<p>削除対象Todo: {title}</p>
		</ConfirmDialog>
	</>
)
