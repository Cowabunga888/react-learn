import { Loader, Pagination, ScrollArea, Table } from '@mantine/core'
import { useState } from 'react'
import { useGetStudentsTable } from '../../../../pages/react-query-page/hooks'

function ReactQueryTableFetching() {
	const [activePage, setActivePage] = useState<number>(1)
	const { data: students, isLoading } = useGetStudentsTable({ page: activePage, perPage: 10 })

	const rows = students?.data.map((st) => (
		<Table.Tr key={st.id}>
			<Table.Td>{st.id}</Table.Td>
			<Table.Td>
				<img className="w-10 h-10 border border-dashed rounded-md object-cover" src={st.avatar} alt="" />
			</Table.Td>
			<Table.Td>{st.first_name}</Table.Td>
			<Table.Td>{st.last_name}</Table.Td>
			<Table.Td>{st.country}</Table.Td>
			<Table.Td>{st.email}</Table.Td>
			<Table.Td>{st.gender}</Table.Td>
		</Table.Tr>
	))

	if (isLoading) {
		return <Loader color="lime" m={'auto'} />
	}

	return (
		<>
			<ScrollArea.Autosize mah={700}>
				<Table>
					<Table.Thead>
						<Table.Tr>
							<Table.Th>#</Table.Th>
							<Table.Th>avatar</Table.Th>
							<Table.Th>first_name</Table.Th>
							<Table.Th>last_name</Table.Th>
							<Table.Th>country</Table.Th>
							<Table.Th>email</Table.Th>
							<Table.Th>gender</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>{rows}</Table.Tbody>
				</Table>
			</ScrollArea.Autosize>

			<Pagination
				color="lime"
				size="sm"
				value={activePage}
				onChange={setActivePage}
				total={students?.pages ?? 1}
				siblings={2}
				defaultValue={1}
				className="my-2"
			/>
		</>
	)
}

export default ReactQueryTableFetching
