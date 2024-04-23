import React from 'react'
import PageSideBar from '../../page-sidebar'
interface IPageLayout {
	children: React.ReactNode
	sidebarData: {
		title: string
		path: string
		icon: React.ReactNode | string | number
		items: {
			innerText: string
			path: string
			disable?: boolean
		}[]
	}[]
}

function PageLayout({ children, sidebarData }: Readonly<IPageLayout>) {
	return (
		<div className="flex gap-3">
			{sidebarData && (
				<div className="side-bar">
					<PageSideBar sidebarData={sidebarData} />
				</div>
			)}
			<div className="flex-1 overflow-auto">{children ?? null}</div>
		</div>
	)
}

export default PageLayout
