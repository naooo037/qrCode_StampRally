import { FC } from 'react'
import { useCookies } from 'react-cookie'
import { Button, Header, HeaderDropdownMenuButton } from 'smarthr-ui'
import styled from 'styled-components'

import { Logo } from './Logo'

export const HeaderComponent: FC = () => {
	const [cookies] = useCookies()

	return (
		<MyHeader
			logo={<Logo />}
			tenants={[{ id: 'template', name: 'QRコード スタンプラリー in 福山大学' }]}
		>
			<HeaderDropdownMenuButton label={cookies.name}>
				<Button>migrate</Button>
			</HeaderDropdownMenuButton>
		</MyHeader>
	)
}
const MyHeader = styled(Header)`
	background-color: #0094ff;
`
