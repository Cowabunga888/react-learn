import { Loader, ScrollArea } from '@mantine/core'
import StudentListItem from '../../../pages/react-query-page/components/student-list-item'
import { useGetStudentsPerpage } from '../../../pages/react-query-page/hooks'

function ReactQueryFetchingView() {
	const { data: students, isLoading } = useGetStudentsPerpage({ page: 1, perPage: 100 })

	return (
		<div className="w-full flex items-center justify-center">
			<div className="w-[400px] p-3 border rounded-md flex flex-col gap-3">
				{isLoading && <Loader color="lime" m={'auto'} />}
				{!isLoading && (
					<ScrollArea h={500} offsetScrollbars scrollbarSize={4} p={10}>
						{students?.data.map((st) => {
							return <StudentListItem data={st} key={st.id} />
						})}
					</ScrollArea>
				)}
			</div>
		</div>
	)
}

export default ReactQueryFetchingView
