import { FC } from 'react'
import { Button } from 'smarthr-ui'

import { GetUserStamps200ResponseInner } from '@/.openapi/api'

import { Camera } from './Camera'
import { StampCard } from './StampCard'

type Props = {
	stamps: GetUserStamps200ResponseInner[]
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Home: FC<Props> = ({ stamps, isOpen, setIsOpen }) => (
	<div>
		<h1>Home</h1>
		<p>Welcome to the Home page!</p>
		<StampCard stamps={stamps} />
		<Button onClick={() => setIsOpen(true)}>カメラ</Button>
		<Camera isOpen={isOpen} setIsOpen={setIsOpen} />
	</div>
)
