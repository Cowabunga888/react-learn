import { Pagination, Select, Table } from '@mantine/core'
import { PaginationState, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useState } from 'react'
import { useGetStudentsDataTanstackTable } from '../../../pages/tanstack-table-page/hooks'
import { StudentTableColumnDef } from './components/column-def'

function BasicTanstackTableView() {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 1,
		pageSize: 10,
	})
	console.log(pagination)

	const { data: studentDataTable } = useGetStudentsDataTanstackTable({
		page: pagination.pageIndex,
		perPage: pagination.pageSize,
	})

	const tableInstance = useReactTable({
		data: studentDataTable?.data ?? [],
		columns: StudentTableColumnDef,
		getCoreRowModel: getCoreRowModel(),
		state: {
			pagination,
		},
		onPaginationChange: setPagination,
		manualPagination: true,
		rowCount: studentDataTable?.pages,
	})

	const rows = tableInstance.getRowModel().rows.map((row) => (
		<Table.Tr key={row.id}>
			{row.getVisibleCells().map((cell) => {
				return <Table.Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Table.Td>
			})}
		</Table.Tr>
	))

	return (
		<>
			<Table>
				<Table.Thead>
					{tableInstance.getHeaderGroups().map((_headerRow, i) => {
						return (
							<Table.Tr key={_headerRow.id}>
								{_headerRow.headers.map((_headerCol) => {
									return (
										<Table.Th key={_headerCol.id}>
											{flexRender(_headerCol.column.columnDef.header, _headerCol.getContext())}
										</Table.Th>
									)
								})}
							</Table.Tr>
						)
					})}
				</Table.Thead>
				<Table.Tbody>{rows}</Table.Tbody>
			</Table>

			<div className="flex gap-3 items-end justify-end">
				<Select
					placeholder="Per page"
					data={['10', '20', '30', '40', '50']}
					size="xs"
					allowDeselect={false}
					checkIconPosition="right"
					w={120}
					onChange={(value) => {
						tableInstance.setPageSize(Number(value))
					}}
					defaultValue={String(pagination.pageSize)}
				/>
				<Pagination
					color="lime"
					size="sm"
					value={pagination.pageIndex}
					onChange={(value) => {
						tableInstance.setPageIndex(value)
					}}
					total={studentDataTable?.pages ?? 1}
					siblings={2}
					defaultValue={1}
				/>
			</div>
		</>
	)
}

export default BasicTanstackTableView
