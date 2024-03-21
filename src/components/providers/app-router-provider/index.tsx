import React from 'react'
import { RouterProvider } from 'react-router-dom'
import useAppRouters from './useAppRouters'

interface Props {
	children?: React.ReactNode
}

function AppRouterProvider({ children }: Readonly<Props>) {
	const router = useAppRouters()
	return (
		<>
			{children}
			<RouterProvider router={router} />
		</>
	)
}

export default AppRouterProvider
