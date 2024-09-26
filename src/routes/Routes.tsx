import { useRoutes } from 'react-router-dom'

import { Layout } from '@/components/layout'
import { Camera } from '@/pages/Camera'
import { Home } from '@/pages/Home'
import { Signup } from '@/pages/Signup'

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
				{
					path: path.camera(),
					element: <Camera />,
				},
				{
					path: path.signup(),
					element: <Signup />,
				},
			],
		},
	])
