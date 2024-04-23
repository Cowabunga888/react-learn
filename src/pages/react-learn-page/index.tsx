import PageNavigationHeader from 'src/components/page-header'
import ReactLearnPageView from 'src/views/react-learn-pages'
import PageLayout from 'src/components/layouts/page-layout'
import useReactLearnSidebarMap from './sidebar-data'

function ReactLearnPage() {
	const sidebarData = useReactLearnSidebarMap()
	return (
		<>
			<PageNavigationHeader />
			<PageLayout sidebarData={sidebarData}>
				<ReactLearnPageView />
			</PageLayout>
		</>
	)
}

export default ReactLearnPage
