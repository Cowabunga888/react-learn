import { ActionIcon, Button, Loader, Modal, Pagination, ScrollArea, Table } from '@mantine/core'
import { RiUserAddLine, RiUserSettingsLine, RiUserUnfollowLine } from '@remixicon/react'
import { useRef, useState } from 'react'
import { useGetStudentsTable } from '../../../../pages/react-query-page/hooks'
import { useDisclosure } from '@mantine/hooks'
import UpSertModalBody from '../../components/upsert-modal-body'
import { IStudentList, IStudentTable } from '../../../../pages/react-query-page/type'

function ReactQueryTableFetching() {
	enum modalType {
		UPDATE_STUDENT = 'UPDATE_STUDENT',
		ADD_STUDENT = 'ADD_STUDENT',
	}
	const [opened, { open, close }] = useDisclosure(false)
	const [activePage, setActivePage] = useState<number>(1)
	const { data: students, isLoading } = useGetStudentsTable({ page: activePage, perPage: 10 })

	const modal = useRef<string>(modalType.UPDATE_STUDENT)
	const student = useRef<IStudentTable | IStudentList | null>(null)

	const openModal = (type: modalType, st?: IStudentTable | IStudentList | null) => {
		modal.current = type
		if (st && type === modalType.UPDATE_STUDENT) {
			student.current = st
		} else {
			student.current = null
		}
		open()
	}

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
			<Table.Td>
				<button type="button" onClick={() => openModal(modalType.UPDATE_STUDENT, st)} className="p-1">
					<RiUserSettingsLine size={20} className="text-gray-200 hover:text-yellow-400" />
				</button>
				<button type="button" className="p-1">
					<RiUserUnfollowLine size={20} className="text-gray-200 hover:text-red-400" />
				</button>
			</Table.Td>
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
							<Table.Th>
								<ActionIcon color="lime">
									<RiUserAddLine
										onClick={() => openModal(modalType.ADD_STUDENT)}
										size={18}
										style={{ width: '95%', height: '95%' }}
									/>
								</ActionIcon>
							</Table.Th>
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
			<Modal opened={opened} onClose={close} withCloseButton centered title={modal.current}>
				<UpSertModalBody type={modal.current} student={student} />
			</Modal>
		</>
	)
}

export default ReactQueryTableFetching
