import { FC } from 'react'
import { Base, DefinitionList } from 'smarthr-ui'

import { TodoSchema } from '@/.openapi/api'

import { BreadcrumbsList, BreadcrumbsType } from '@/components/BreadcrumbsList'
import { MultiLineText } from '@/components/MultiLineText'
import { dateFormate } from '@/feature/dateFormate'

type Props = {
	todo: TodoSchema
	breadItems: BreadcrumbsType[]
}

export const Todo: FC<Props> = ({ todo, breadItems }) => {
	const items = [
		{
			term: 'TodoId',
			description: todo.ID,
			fullWidth: true,
		},
		{
			term: 'タイトル',
			description: todo.title,
			fullWidth: true,
		},
		{
			term: '説明',
			description: <MultiLineText text={todo.description || ''} />,
			fullWidth: true,
		},
		{
			term: '作成日時',
			description: dateFormate(todo.CreatedAt || ''),
		},
		{
			term: '更新日時',
			description: dateFormate(todo.UpdatedAt || ''),
		},
	]

	return (
		<div>
			<BreadcrumbsList items={breadItems} />
			<h1>Todo</h1>
			<Base padding={1.5} overflow='auto'>
				<DefinitionList items={items} />
			</Base>
		</div>
	)
}
