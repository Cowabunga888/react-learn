import { Loader, ScrollArea } from '@mantine/core'
import { randomId, useIntersection } from '@mantine/hooks'
import { useEffect } from 'react'
import StudentListItem from '../../../../../../pages/library-page/pages/react-query-page/components/student-list-item'
import { useGetStudentsList } from '../../../../../../pages/library-page/pages/react-query-page/hooks'

function ReactQueryInfiniteListFetching() {
	const { data: students, isLoading, hasNextPage, fetchNextPage } = useGetStudentsList({ page: 1, perPage: 10 })

	const { ref, entry } = useIntersection({ threshold: 1 })

	useEffect(() => {
		if (hasNextPage && entry?.isIntersecting) {
			fetchNextPage()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [entry?.isIntersecting])

	return (
		<div className="w-full flex items-center justify-center">
			<div className="w-[400px] p-3 border rounded-md flex flex-col gap-3">
				{isLoading && <Loader color="lime" m={'auto'} />}
				{!isLoading && (
					<ScrollArea h={500} offsetScrollbars scrollbarSize={4} p={10}>
						{students?.pages?.map((page, i) => {
							return (
								<div key={randomId()}>
									{page?.data?.map((st) => {
										return <StudentListItem data={st} key={st.id} />
									})}
								</div>
							)
						})}

						{hasNextPage && (
							<div className="w-full flex justify-center">
								<Loader ref={ref} color="lime" m={'auto'} size={'sm'} />
							</div>
						)}
					</ScrollArea>
				)}
			</div>
		</div>
	)
}

export default ReactQueryInfiniteListFetching
