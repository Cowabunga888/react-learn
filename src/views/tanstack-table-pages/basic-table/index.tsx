import { Pagination, Select, Table } from '@mantine/core'
import { RiExpandUpDownLine, RiSortAsc, RiSortDesc } from '@remixicon/react'
import {
	ColumnFiltersState,
	PaginationState,
	SortingState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import { useGetStudentsDataTanstackTable } from '../../../pages/tanstack-table-page/hooks'
import { StudentTableColumnDef } from './components/column-def'
import ColFilterMore from './components/filter-more'
import { fuzzyFilter } from './components/filter-more/filter-funcs'
import clsx from 'clsx'

function BasicTanstackTableView() {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 1,
		pageSize: 10,
	})
	const [rowSelection, setRowSelection] = useState({})
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [globalFilter, setGlobalFilter] = useState('')

	const { data: studentDataTable } = useGetStudentsDataTanstackTable({
		page: pagination.pageIndex,
		perPage: pagination.pageSize,
	})

	const tableInstance = useReactTable({
		getCoreRowModel: getCoreRowModel(),
		data: studentDataTable?.data ?? [],
		columns: StudentTableColumnDef,
		filterFns: {
			fuzzy: fuzzyFilter,
		},
		state: {
			pagination,
			rowSelection,
			sorting,
			columnFilters,
			globalFilter,
		},
		// paging
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setPagination,
		manualPagination: true,
		// selecting
		enableRowSelection: true, //enable row selection for all rows
		onRowSelectionChange: setRowSelection,
		// sorting
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		// filter
		onColumnFiltersChange: setColumnFilters,
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: fuzzyFilter,
		getFilteredRowModel: getFilteredRowModel(),
	})

	const rows = tableInstance.getRowModel().rows.map((row) => (
		<Table.Tr key={row.id}>
			{row.getVisibleCells().map((cell) => {
				return (
					<Table.Td className={cell.id.includes('_select') ? 'sticky left-0 bg-white' : ''} key={cell.id}>
						{flexRender(cell.column.columnDef.cell, cell.getContext())}
					</Table.Td>
				)
			})}
		</Table.Tr>
	))

	const handleChangePageSize = (value: string | null) => {
		if (!value) return
		if (value === 'All') {
			value = studentDataTable?.items.toString() ?? '0'
		}
		tableInstance.setPageSize(Number(value))
		tableInstance.setPageIndex(1)
	}

	const handleChangePageIndex = (value: number) => {
		tableInstance.setPageIndex(value)
	}

	return (
		<>
			<div className="w-full h-[500px]">
				<Table.ScrollContainer minWidth={600} className="relative h-full">
					<Table className="bg-white" highlightOnHover withColumnBorders>
						<Table.Thead className="sticky top-0 bg-white">
							{tableInstance.getHeaderGroups().map((_headerRow, i) => {
								return (
									<Table.Tr key={_headerRow.id} className="relative">
										{_headerRow.headers.map((_headerCol) => {
											return (
												<Table.Th
													colSpan={_headerCol.colSpan}
													key={_headerCol.id}
													className={clsx({
														'border-2 border-dashed border-green-300 box-border':
															columnFilters.filter((col) => col.id === _headerCol.id)
																?.length > 0,
														'sticky left-0 bg-white': _headerCol.id === 'select',
													})}
												>
													<div className="flex items-center justify-between">
														<button
															className="w-full flex gap-3 items-center justify-between"
															type="button"
															onClick={_headerCol.column.getToggleSortingHandler()}
														>
															{flexRender(
																_headerCol.column.columnDef.header,
																_headerCol.getContext()
															)}
															{_headerCol.column.getCanSort() && (
																<>
																	{{
																		asc: <RiSortAsc size={14} color="#75D940" />,
																		desc: <RiSortDesc size={14} color="#FFB01B" />,
																	}[_headerCol.column.getIsSorted() as string] ?? (
																		<RiExpandUpDownLine size={14} color="#aaaaaa" />
																	)}
																</>
															)}
														</button>
														{_headerCol.column.getCanFilter() && (
															<ColFilterMore
																column={_headerCol.column}
																table={tableInstance}
															/>
														)}
													</div>
												</Table.Th>
											)
										})}
									</Table.Tr>
								)
							})}
						</Table.Thead>

						<Table.Tbody>{rows}</Table.Tbody>
					</Table>
				</Table.ScrollContainer>
			</div>

			<div className="mt-5 flex gap-3 items-end justify-start">
				<Select
					placeholder="Per page"
					data={['5', '10', '20', '30', '40', '50', 'All']}
					size="xs"
					allowDeselect={false}
					checkIconPosition="right"
					w={120}
					onChange={handleChangePageSize}
					defaultValue={String(pagination.pageSize)}
					disabled={tableInstance.getIsAllRowsSelected() || tableInstance.getIsSomeRowsSelected()}
				/>
				<Pagination
					size="sm"
					value={pagination.pageIndex}
					onChange={handleChangePageIndex}
					total={studentDataTable?.pages ?? 1}
					siblings={2}
					defaultValue={1}
					disabled={tableInstance.getIsAllRowsSelected() || tableInstance.getIsSomeRowsSelected()}
				/>
			</div>
		</>
	)
}

export default BasicTanstackTableView
