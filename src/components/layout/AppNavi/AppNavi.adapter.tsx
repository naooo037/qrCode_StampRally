import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { MyAppNavi } from './AppNavi'

const naviButtons = [
	{
		children: 'ホーム',
		href: '/',
	},
]

export const AppNaviAdapter: FC = () => {
	const pathname = useLocation().pathname

	return (
		<MyAppNavi
			naviButtons={naviButtons.map((button) => {
				return { ...button, current: button.href === pathname }
			})}
		/>
	)
}
