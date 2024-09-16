import { FC } from 'react'

type Props = {
	text: string
}

export const MultiLineText: FC<Props> = ({ text }) => {
	return (
		<>
			{text.split('\n').map((line, index) => (
				<p key={index}>{line}</p>
			))}
		</>
	)
}
