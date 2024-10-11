import { FC } from 'react'
import { Button } from 'smarthr-ui'
import styled from 'styled-components'

import { GetUserStamps200ResponseInner } from '@/.openapi/api'

import { Camera } from './Camera'
import { StampCard } from './StampCard'

type Props = {
	stamps: GetUserStamps200ResponseInner[]
	setStamps: React.Dispatch<React.SetStateAction<GetUserStamps200ResponseInner[] | undefined>>
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Home: FC<Props> = ({ stamps, setStamps, isOpen, setIsOpen }) => (
	<div>
		<StampCard stamps={stamps} />
		<StyledContainer>
			<StyledButton onClick={() => setIsOpen(true)} variant='primary'>
				カメラ
			</StyledButton>
		</StyledContainer>
		<Camera setStamps={setStamps} isOpen={isOpen} setIsOpen={setIsOpen} />
	</div>
)

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 30px;
`

const StyledButton = styled(Button)`
	fontsize: '24px';
	padding: '20px 40px';
	width: 100px;
	height: 50px;
	border-radius: '10px';
`
