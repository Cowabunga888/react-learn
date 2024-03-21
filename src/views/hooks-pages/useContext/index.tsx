import { Tabs } from '@mantine/core'
import UseContext from './useContext-comparison'
import UseContextGeneral from './useContext-general'
import UseContextWithGlobalState from './context-globalstate'

function UseContextPageView() {
	const tabData = [
		{
			tab_value: 'useContext-general',
			tab_inner_text: 'General',
			panel: <UseContextGeneral />,
			icon: '1. ',
		},
		{
			tab_value: 'useContext',
			tab_inner_text: 'useContext',
			panel: <UseContext />,
			icon: '2. ',
		},
		{
			tab_value: 'UseContextWithGlobalState',
			tab_inner_text: 'useContext With GlobalState',
			panel: <UseContextWithGlobalState />,
			icon: '3. ',
		},
	]

	return (
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
	)
}

export default UseContextPageView
