import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Stack } from 'smarthr-ui'
import styled from 'styled-components'

import { Header } from './Header'

export const Layout: FC = () => (
	<>
		<Header />
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
