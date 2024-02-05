import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from '../../../pages/main-page'
import UseEffectPage from '../../../pages/hooks-pages/useEffect'

interface Props {
	children?: React.ReactNode
}
const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		children: [
			{
				path: 'useEffect',
				element: <UseEffectPage />,
			},
		],
	},
])

function AppRouterProvider({ children }: Props) {
	return (
		<>
			{children}
			<RouterProvider router={router} />
		</>
	)
}

export default AppRouterProvider
