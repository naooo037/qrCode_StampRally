import { useRoutes } from 'react-router-dom'

import { Layout } from '@/components/layout'
import { Home } from '@/pages/Home'

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
					path: path.home(),
					element: <Home />,
				},
			],
		},
	])
