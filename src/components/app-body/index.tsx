import React from 'react'

interface IAppBody {
	children: React.ReactNode
}

function AppBody({ children }: Readonly<IAppBody>) {
	return <div>{children}</div>
}

export default AppBody
