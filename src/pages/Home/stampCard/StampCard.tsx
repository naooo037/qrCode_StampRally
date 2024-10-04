import { FC } from 'react'
import { Base, Cluster} from 'smarthr-ui'
import styled from 'styled-components'

import { GetUserStamps200ResponseInner } from '@/.openapi/api'

import { theme } from '@/lib/smarthrTheme'

type Props = {
	stamps: GetUserStamps200ResponseInner[]
}

export const StampCard: FC<Props> = ({ stamps }) => (
	<StyledStack>
		<StyledCluster gap='XS'>
			{stamps.map((_, i) => (
				<ColorBox key={i} />
			))}
		</StyledCluster>
	</StyledStack>
)

const StyledStack = styled(Base)`
	padding: ${theme.spacing.S};
`

const ColorBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
  border: 3px solid;
  border-color: black;
	background-color: white;
	color: white;
	width: 100px;
	height: 100px;
`
const StyledCluster = styled(Cluster)`
  justify-content: center;
`