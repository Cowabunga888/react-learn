import { Checkbox, Popover } from '@mantine/core'
import { createColumnHelper } from '@tanstack/react-table'
import { useDisclosure } from '@mantine/hooks'
import { IStudent } from '../../../../../../../../../pages/react-learn-page/pages/library-page/pages/tanstack-table-page/type'

const columnHelper = createColumnHelper<IStudent>()

export const StudentTableColumnDef = [
	columnHelper.accessor('select', {
		header: ({ table }) => (
			<Checkbox
				label={`${table.getSelectedRowModel().flatRows.length}/${table.getPreFilteredRowModel().rows.length}`}
				size="xs"
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
				<AvatarPopover src={prop.getValue()} />
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

const AvatarPopover = ({ src }: { src: string }) => {
	const [opened, { close, open }] = useDisclosure(false)

	return (
		<Popover position="right" withArrow shadow="md" opened={opened}>
			<Popover.Target>
				<button type="button" onMouseEnter={open} onMouseLeave={close}>
					<img src={src} alt="avatar" className="w-full h-full object-contain" />
				</button>
			</Popover.Target>
			<Popover.Dropdown style={{ pointerEvents: 'none' }}>
				<img src={src} alt="avatar" className="w-[80px] h-[80px] object-contain border border-dashed" />
			</Popover.Dropdown>
		</Popover>
	)
}
