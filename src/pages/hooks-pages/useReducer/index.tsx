import { Tabs } from '@mantine/core'
import UseReducerGeneral from './useReducer-general'
import UseReducerEX from './useReducer-ex'
import UseReducerTodoList from './advance/todo-app/useReducer-todo'

function UseReducerPage() {
	const tabData = [
		{
			tab_value: 'useReducer-general',
			tab_inner_text: 'General',
			panel: <UseReducerGeneral />,
			icon: '1. ',
		},
		{
			tab_value: 'useReducer-ex',
			tab_inner_text: 'Example',
			panel: <UseReducerEX />,
			icon: '2. ',
		},
		{
			tab_value: 'useReducer-todo',
			tab_inner_text: 'Todo list',
			panel: <UseReducerTodoList />,
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

export default UseReducerPage
