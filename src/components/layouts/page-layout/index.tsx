import React from 'react'
import PageSideBar from '../../page-sidebar'

interface IPageLayout {
	children: React.ReactNode
}

function PageLayout({ children }: Readonly<IPageLayout>) {
	return (
		<div className="flex gap-3">
			<div className="side-bar">
				<PageSideBar />
			</div>
			<div className="flex-1 overflow-auto">{children ?? null}</div>
		</div>
	)
}

export default PageLayout
