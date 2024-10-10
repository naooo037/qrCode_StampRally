import { FC, useState } from 'react'

import { GetUserStamps200ResponseInner } from '@/.openapi/api'

import { Stamp } from './Stamp'

type Props = {
	stamp: GetUserStamps200ResponseInner
}

export const StampAdapter: FC<Props> = ({ stamp }) => {
	const [isOpen, setIsOpened] = useState(false)

	const onClickStamp = () => {
		setIsOpened(true)
		console.log(stamp.Id)
	}

	const onClickClose = () => {
		setIsOpened(false)
	}

	return (
		<Stamp stamp={stamp} isOpen={isOpen} onClickStamp={onClickStamp} onClickClose={onClickClose} />
	)
}
