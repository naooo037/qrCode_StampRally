import { FC } from 'react'
import { Button } from 'smarthr-ui'
import styled from 'styled-components'

import { Camera } from './Camera'

type Props = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Home: FC<Props> = ({ isOpen, setIsOpen }) => (
	<div>
		<h1>Home</h1>
		<p>Welcome to the Home page!</p>
		<StyledContainer>
			<StyledButton onClick={() => setIsOpen(true)} variant='primary'>
				カメラ
			</StyledButton>
		</StyledContainer>
		<Camera isOpen={isOpen} setIsOpen={setIsOpen} />
	</div>
)

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const StyledButton = styled(Button)`
	fontsize: '24px';
	padding: '20px 40px';
	width: 100px;
	height: 50px;
	border-radius: '10px';
`