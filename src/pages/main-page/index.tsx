import { Tabs } from '@mantine/core'
import { RiContrastDropLine, RiLoopLeftLine, RiReactjsLine } from '@remixicon/react'
import { Outlet } from 'react-router-dom'
import UseEffectPage from '../hooks-pages/useEffect'
import UseStatePage from '../hooks-pages/useState'
import UseLayoutEffectPage from '../hooks-pages/useLayoutEffect'

function MainPage() {
	const size = 16
	const color = '#788AEB'
	const tabData = [
		{
			tab_value: 'useState',
			tab_inner_text: 'UseState',
			panel: <UseStatePage />,
			icon: <RiContrastDropLine size={size} color={color} />,
		},
		{
			tab_value: 'useEffect',
			tab_inner_text: 'UseEffect',
			panel: <UseEffectPage />,
			icon: <RiLoopLeftLine size={size} color={color} />,
		},
		{
			tab_value: 'useLayoutEffect',
			tab_inner_text: 'UseLayoutEffect',
			panel: <UseLayoutEffectPage />,
			icon: <RiLoopLeftLine size={size} color={color} />,
		},
	]
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
						<Tabs.Panel value={tab.tab_value} key={i}>
							<div className="pt-3">{tab.panel}</div>
						</Tabs.Panel>
					)
				})}
			</Tabs>
			<Outlet />
		</div>
	)
}

export default MainPage
