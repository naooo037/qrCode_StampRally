import { FC } from 'react'
import { Base, Cluster } from 'smarthr-ui'
import styled from 'styled-components'

import { GetUserStamps200ResponseInner } from '@/.openapi/api'

import { theme } from '@/lib/smarthrTheme'

import { Stamp } from './Stamp'

type Props = {
	stamps: GetUserStamps200ResponseInner[]
}

export const StampCard: FC<Props> = ({ stamps }) => (
	<StyledStack>
		<StyledCluster gap='XS'>
			{stamps.map((stamp, i) => (
				<Stamp key={i} stamp={stamp} />
			))}
		</StyledCluster>
	</StyledStack>
)

const StyledStack = styled(Base)`
	padding: ${theme.spacing.S};
`

const StyledCluster = styled(Cluster)`
	justify-content: center;
`
