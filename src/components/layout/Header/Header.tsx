import { FC } from 'react'
import { Header } from 'smarthr-ui'
import styled from 'styled-components'

import { Logo } from './Logo'

export const HeaderComponent: FC = () => {
	return (
		<MyHeader
			logo={<Logo />}
			tenants={[{ id: 'template', name: 'Go x React template' }]}
		></MyHeader>
	)
}
const MyHeader = styled(Header)`
	background-color: #0094ff;
`
