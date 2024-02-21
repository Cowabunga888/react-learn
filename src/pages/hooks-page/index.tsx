import { Tabs } from '@mantine/core'
import { RiReactjsLine } from '@remixicon/react'
import { Outlet } from 'react-router-dom'
import useTabData from './hooks/data'

function HooksPage() {
	const { data: tabData } = useTabData()

	return (
		<div className="p-2">
			<div className="p-2 text-center text-xl text-[#788AEB] font-bold uppercase flex items-center justify-center">
				<RiReactjsLine /> <span>React Hooks</span>
			</div>
			<Tabs variant="outline" defaultValue={tabData[0].tab_value}>
				<Tabs.List>
					{tabData.map((tab, i) => {
						return (
							<Tabs.Tab value={tab.tab_value} leftSection={tab.icon} key={i}>
								{tab.tab_inner_text}
							</Tabs.Tab>
						)
					})}
				</Tabs.List>

				{tabData.map((tab, i) => {
					return (
						<Tabs.Panel value={tab.tab_value} key={tab.tab_value}>
							<div className="pt-3">{tab.panel}</div>
						</Tabs.Panel>
					)
				})}
			</Tabs>
			<Outlet />
		</div>
	)
}

export default HooksPage
