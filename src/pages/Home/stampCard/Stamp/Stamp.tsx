import { FC } from 'react'
import { MessageDialog } from 'smarthr-ui'
import styled from 'styled-components'

import { GetUserStamps200ResponseInner } from '@/.openapi/api'

type Props = {
	stamp: GetUserStamps200ResponseInner
	isOpen: boolean
	onClickStamp: () => void
	onClickClose: () => void
}

export const Stamp: FC<Props> = ({ stamp, isOpen, onClickStamp, onClickClose }) => (
	<>
		<ColorBox onClick={onClickStamp}>
			{stamp.is_collected ? (
				<StyledImageWrapper>
					<StyledImage src='/仮画像.jpg' alt='Collected Stamp' />
				</StyledImageWrapper>
			) : null}
		</ColorBox>
		<MessageDialog
			isOpen={isOpen}
			title={stamp.name}
			description={<p>{stamp.description}</p>}
			onClickClose={onClickClose}
			width={400}
		/>
	</>
)

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
