import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from '../../../App'
import HooksPage from '../../../pages/main-page'

interface Props {
	children?: React.ReactNode
}
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'hooks',
				element: <HooksPage />,
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
