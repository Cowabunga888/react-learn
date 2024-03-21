import { Tabs } from '@mantine/core'
import { useState } from 'react'
import ReactQueryInfiniteListFetching from './fetching-infinite-list'
import ReactQueryTableFetching from './fetching-table'

function ReactQueryFetchingView() {
	const [activeTab, setActiveTab] = useState<string | null>('first')

	return (
		<Tabs variant="outline" value={activeTab} onChange={setActiveTab}>
			<Tabs.List>
				<Tabs.Tab value="first">Table fetching</Tabs.Tab>
				<Tabs.Tab value="second">Infinite fetching</Tabs.Tab>
			</Tabs.List>

			<Tabs.Panel value="first">
				<ReactQueryTableFetching />
			</Tabs.Panel>
			<Tabs.Panel value="second">
				<ReactQueryInfiniteListFetching />
			</Tabs.Panel>
		</Tabs>
	)
}

export default ReactQueryFetchingView
