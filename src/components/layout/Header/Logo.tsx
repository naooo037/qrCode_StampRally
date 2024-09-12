import { Base } from 'smarthr-ui'
import styled from 'styled-components'

import logo from '@/assets/circleLogo.png'
import { theme } from '@/lib/smarthrTheme'

export const Logo = () => {
	return (
		<MyBase>
			<img src={logo} />
		</MyBase>
	)
}

const MyBase = styled(Base)`
	display: flex;
	margin: ${theme.spacing.X3S};
	padding: ${theme.spacing.X3S};
	img {
		height: 48px;
	}
`
