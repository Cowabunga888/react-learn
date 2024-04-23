import { Loader, ScrollArea } from '@mantine/core'
import { useEffect, useState } from 'react'
import StudentListItem from 'src/pages/react-learn-page/pages/library-page/pages/react-query-page/components/student-list-item'
import { IStudent } from 'src/pages/react-learn-page/pages/library-page/pages/tanstack-table-page/type'
import http from 'src/utils/http'

function BasicApiFetchingView() {
	// 1. create state
	const [students, setStudents] = useState<IStudent[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	// 2. create async function
	// 3. set state
	const hanldeGetStudents = async () => {
		setIsLoading(true)

		return await http
			.get('/students', {})
			.then((res) => {
				console.log(res)
				if (res.status === 200) {
					setStudents(res?.data)
				}
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	// 4. call async function
	useEffect(() => {
		hanldeGetStudents()
	}, [])

	return (
		<div className="w-full flex items-center justify-center">
			<div className="w-[400px] p-3 border rounded-md flex flex-col gap-3">
				{isLoading && <Loader m={'auto'} />}
				{!isLoading && (
					<ScrollArea h={500} offsetScrollbars scrollbarSize={4} p={10}>
						{students?.map((st) => {
							return <StudentListItem data={st} key={st.id} />
						})}
					</ScrollArea>
				)}
			</div>
		</div>
	)
}

export default BasicApiFetchingView
