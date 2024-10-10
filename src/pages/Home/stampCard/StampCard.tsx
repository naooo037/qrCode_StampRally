import { FC } from 'react'
import { Base, Cluster } from 'smarthr-ui'
import styled from 'styled-components'

import { GetUserStamps200ResponseInner } from '@/.openapi/api'

import { theme } from '@/lib/smarthrTheme'

type Props = {
	stamps: GetUserStamps200ResponseInner[]
}

export const StampCard: FC<Props> = ({ stamps }) => (
	<StyledStack>
		<StyledCluster gap='XS'>
			{stamps.map((stamp, i) => (
				<ColorBox key={i}>
					{stamp.is_collected ? (
						<StyledImageWrapper>
							<StyledImage src='/仮画像.jpg' alt='Collected Stamp' />
						</StyledImageWrapper>
					) : null}
				</ColorBox>
			))}
		</StyledCluster>
	</StyledStack>
)

const StyledStack = styled(Base)`
	padding: ${theme.spacing.S};
`

const ColorBox = styled.div`
	border-radius: 20px;
	border: 3px solid;
	border-color: black;
	background-color: white;
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden; /* 画像のはみ出しを防ぐ */
`

const StyledImageWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`

const StyledImage = styled.img`
	max-width: 100%;
	max-height: 100%;
	object-fit: contain; /* 縦横比を維持してボックス内に収める */
`

const StyledCluster = styled(Cluster)`
	justify-content: center;
`
