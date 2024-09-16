import { FC, ReactNode } from 'react'
import { ActionDialog } from 'smarthr-ui'

type Props = {
	isOpen: boolean
	title: string
	actionText: string
	onClickClose: () => void
	onClickAction: () => void
	actionTheme?: 'primary' | 'secondary' | 'danger'
	children?: ReactNode
}

export const ConfirmDialog: FC<Props> = ({
	isOpen,
	title,
	actionText,
	onClickAction,
	onClickClose,
	actionTheme,
	children,
}) => {
	return (
		<ActionDialog
			title={title}
			isOpen={isOpen}
			actionText={actionText}
			onClickAction={onClickAction}
			onClickClose={onClickClose}
			actionTheme={actionTheme}
		>
			{children}
		</ActionDialog>
	)
}
