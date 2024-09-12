import { FC } from 'react'
import { Header } from 'smarthr-ui'
import styled from 'styled-components'

import { Logo } from './Logo'
import { SignoutButton } from './SignoutButton'

export const HeaderComponent: FC = () => {
	return (
		<MyHeader logo={<Logo />} tenants={[{ id: 'template', name: 'Go x React template' }]}>
			<SignoutButton />
		</MyHeader>
	)
}
const MyHeader = styled(Header)`
	background-color: #0094ff;
`
