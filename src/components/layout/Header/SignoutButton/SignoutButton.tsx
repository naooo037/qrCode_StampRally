import { FC } from 'react'
import { Button, FaRightFromBracketIcon, Tooltip } from 'smarthr-ui'

type Props = {
	onSignout: () => void
}

export const SignoutButton: FC<Props> = ({ onSignout }) => {
	return (
		<Button onClick={onSignout}>
			<Tooltip message='サインアウト' horizontal='center' vertical='top'>
				<FaRightFromBracketIcon />
			</Tooltip>
		</Button>
	)
}
