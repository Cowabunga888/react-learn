import { Button, Input, Select } from '@mantine/core'

function TodoAddItem() {
	const selectData = [
		{ value: 'hight', label: 'Hight' },
		{ value: 'medium', label: 'Medium' },
		{ value: 'low', label: 'Low' },
	]
	return (
		<div className="flex items-center justify-center gap-2 w-full">
			<Input radius="xs" placeholder="Add todo..." className="w-full" />
			<Select radius="xs" placeholder="Pick value" data={selectData} w={200} />
			<Button radius="xs" variant="filled" color="lime" className="flex-shrink-0">
				Add
			</Button>
		</div>
	)
}

export default TodoAddItem
