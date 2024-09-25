import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Stack } from 'smarthr-ui'
import styled from 'styled-components'

import { AppNavi } from './AppNavi'
import { Header } from './Header'

export const Layout: FC = () => (
	<>
		<Header />
		<AppNavi />
		<MainStack>
			<Outlet />
		</MainStack>
	</>
)

const MainStack = styled(Stack)`
	width: 800px;
	max-width: 100%;
	margin: 0 auto;
`
