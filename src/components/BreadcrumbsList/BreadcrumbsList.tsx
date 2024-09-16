import { FC } from 'react'
import { Cluster, TextLink } from 'smarthr-ui'

export type BreadcrumbsType = {
	text: string
	href: string
}
type Props = {
	items: BreadcrumbsType[]
}

export const BreadcrumbsList: FC<Props> = ({ items }) => {
	return (
		<Cluster>
			{items.map((item, index) => (
				<div key={index}>
					<TextLink href={item.href}>{item.text}</TextLink>
					{index !== items.length - 1 && ' / '}
				</div>
			))}
		</Cluster>
	)
}
