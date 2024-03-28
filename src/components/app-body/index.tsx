import React from 'react'
import './style/style.css'
import AppSideBar from '../app-sidebar'
interface IAppBody {
	children: React.ReactNode
}

function AppBody({ children }: Readonly<IAppBody>) {
	return (
		<div className="flex gap-3">
			<div className="side-bar">
				<AppSideBar />
			</div>
			<div className="flex-1 overflow-auto">{children}</div>
		</div>
	)
}

export default AppBody
