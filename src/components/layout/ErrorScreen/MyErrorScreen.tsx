import { FC } from 'react'
import { ErrorScreen, Text } from 'smarthr-ui'

import logo from '@/assets/circleLogo.png'
import { ErrorSchema } from '@/stores/errorStore'

export const MyErrorScreen: FC<ErrorSchema> = ({ status, title, message }) => (
	<ErrorScreen
		logo={<img src={logo} width={'150px'} alt='logo' />}
		title={title}
		links={[
			{
				label: 'ホームへ戻る',
				url: '/',
			},
		]}
	>
		<Text as='p'>Error Status Code: {status}</Text>
		<Text as='p'>{message}</Text>
	</ErrorScreen>
)
