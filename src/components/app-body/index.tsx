import React from 'react'
import './css/style.css'
interface IAppBody {
	children: React.ReactNode
}

function AppBody({ children }: Readonly<IAppBody>) {
	return <>{children}</>
}

export default AppBody
