import { useRoutes } from 'react-router-dom'

import { Layout } from '@/components/layout'
import { Home } from '@/pages/Home'
import { Signin } from '@/pages/Signin'
import { Signup } from '@/pages/Signup'
import { Todo } from '@/pages/Todo'
import { Todos } from '@/pages/Todos'

import { path } from './path'

export const Routes = () =>
	useRoutes([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: path.root(),
					element: <Home />,
				},
				{
					path: path.signin(),
					element: <Signin />,
				},
				{
					path: path.signup(),
					element: <Signup />,
				},
				{
					path: path.todo(':id'),
					element: <Todo />,
				},
				{
					path: path.todos(),
					element: <Todos />,
				},
			],
		},
	])
