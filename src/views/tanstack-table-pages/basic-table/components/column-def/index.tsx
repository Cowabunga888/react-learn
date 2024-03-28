import { Checkbox } from '@mantine/core'
import { createColumnHelper } from '@tanstack/react-table'
import { IStudent } from '../../../../../pages/tanstack-table-page/type'

const columnHelper = createColumnHelper<IStudent>()

export const StudentTableColumnDef = [
	columnHelper.accessor('select', {
		header: ({ table }) => (
			<Checkbox
				label={`${table.getSelectedRowModel().flatRows.length}/${table.getPreFilteredRowModel().rows.length}`}
				size="xs"
				color="lime"
				radius="xs"
				{...{
					checked: table.getIsAllRowsSelected(),
					indeterminate: table.getIsSomeRowsSelected(),
					onChange: table.getToggleAllRowsSelectedHandler(),
				}}
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				size="xs"
				color="lime"
				radius="xs"
				className="flex justify-center"
				{...{
					checked: row.getIsSelected(),
					disabled: !row.getCanSelect(),
					// indeterminate: row.getIsSomeSelected(),
					onChange: row.getToggleSelectedHandler(),
				}}
			/>
		),
		enableSorting: false,
		enableColumnFilter: false,
	}),
	columnHelper.accessor('id', {
		header: 'ID',
		cell: (prop) => <>{prop.getValue()}</>,
	}),
	columnHelper.accessor('avatar', {
		header: 'avatar',
		cell: (prop) => (
			<div className="border border-dashed rounded-md w-10 h-10 m-auto">
				<img src={prop.getValue()} alt="avatar" className="w-full h-full object-contain" />
			</div>
		),
	}),
	columnHelper.accessor('first_name', {
		header: 'first_name',
		cell: (prop) => <>{prop.getValue()}</>,
	}),
	columnHelper.accessor('last_name', {
		header: 'last_name',
		cell: (prop) => <>{prop.getValue()}</>,
	}),
	columnHelper.accessor('email', {
		header: 'email',
		cell: (prop) => <>{prop.getValue()}</>,
	}),
	columnHelper.accessor('gender', {
		header: 'gender',
		cell: (prop) => <>{prop.getValue()}</>,
	}),
	columnHelper.accessor('country', {
		header: 'country',
		cell: (prop) => <>{prop.getValue()}</>,
	}),
	columnHelper.accessor('btc_address', {
		header: 'btc_address',
		cell: (prop) => <>{prop.getValue()}</>,
	}),
]
