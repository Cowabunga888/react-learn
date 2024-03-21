import { useEffect, useState } from 'react'
import { studentsService } from '../../../pages/react-query-page/services'
import { IStudentTable } from '../../../pages/react-query-page/type'
import StudentListItem from '../../../pages/react-query-page/components/student-list-item'
import { Loader, ScrollArea } from '@mantine/core'

function BasicApiFetchingView() {
	// 1. create state
	const [students, setStudents] = useState<IStudentTable[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	// 2. create async function
	// 3. set state
	const hanldeGetStudents = async () => {
		setIsLoading(true)
		return await studentsService
			.getStudents({ page: 1, perPage: 100 })
			.then((res) => setStudents(res?.data))
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
				{isLoading && <Loader color="lime" m={'auto'} />}
				{!isLoading && (
					<ScrollArea h={500} offsetScrollbars scrollbarSize={4} p={10}>
						{students.map((st) => {
							return <StudentListItem data={st} key={st.id} />
						})}

						<div className="w-full flex justify-center">
							<Loader color="lime" m={'auto'} size={'sm'} />
						</div>
					</ScrollArea>
				)}
			</div>
		</div>
	)
}

export default BasicApiFetchingView
