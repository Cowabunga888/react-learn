import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from '../../../App'
import MainPage from '../../../pages/main-page'

interface Props {
	children?: React.ReactNode
}
const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/context',
		element: <App />,
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
