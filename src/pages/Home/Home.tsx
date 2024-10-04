import { FC } from 'react'
import { Button } from 'smarthr-ui'

import { GetUserStamps200ResponseInner } from '@/.openapi/api'

import { Camera } from './Camera'

type Props = {
	stamps: GetUserStamps200ResponseInner[] | undefined
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Home: FC<Props> = ({ isOpen, setIsOpen }) => (
	<div>
		<h1>Home</h1>
		<p>Welcome to the Home page!</p>
		<Button onClick={() => setIsOpen(true)}>カメラ</Button>
		<Camera isOpen={isOpen} setIsOpen={setIsOpen} />
	</div>
)
