import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from '../../../App'
import HooksPage from '../../../pages/main-page'
import NotFound from '../../../views/404'
import useAppRouters from './useAppRouters'

interface Props {
	children?: React.ReactNode
}

function AppRouterProvider({ children }: Props) {
	const router = useAppRouters()
	return (
		<>
			{children}
			<RouterProvider router={router} />
		</>
	)
}

export default AppRouterProvider
