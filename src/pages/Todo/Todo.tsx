import { FC } from 'react'
import { Base, Cluster, DefinitionList } from 'smarthr-ui'
import styled from 'styled-components'

import { TodoSchema } from '@/.openapi/api'

import { BreadcrumbsList, BreadcrumbsType } from '@/components/BreadcrumbsList'
import { MultiLineText } from '@/components/MultiLineText'
import { dateFormate } from '@/feature/dateFormate'

import { UpdateTodoButton } from './UpdateTodo'

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
			<MyCluster>
				<h1>Todo詳細</h1>
				<UpdateTodoButton todo={todo} />
			</MyCluster>
			<Base padding={1.5} overflow='auto'>
				<DefinitionList items={items} />
			</Base>
		</div>
	)
}

const MyCluster = styled(Cluster)`
	justify-content: space-between;
	align-items: center;
`
