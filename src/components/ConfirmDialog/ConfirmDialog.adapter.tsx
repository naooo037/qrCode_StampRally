import { FC, ReactNode } from 'react'

import { ConfirmDialog } from './ConfirmDialog'

type Props = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	title: string
	actionText: string
	onClickAction: () => void
	actionTheme?: 'primary' | 'secondary' | 'danger'
	children?: ReactNode
}

export const ConfirmDialogAdapter: FC<Props> = ({
	isOpen,
	setIsOpen,
	title,
	actionText,
	onClickAction,
	actionTheme,
	children,
}) => {
	const onClickClose = () => {
		setIsOpen(false)
	}

	return (
		<ConfirmDialog
			isOpen={isOpen}
			title={title}
			actionText={actionText}
			onClickAction={onClickAction}
			onClickClose={onClickClose}
			actionTheme={actionTheme}
		>
			{children}
		</ConfirmDialog>
	)
}
