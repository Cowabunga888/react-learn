import { MultiSelect } from '@mantine/core'

function TodoPrioritySelect() {
	const selectData = [
		{ value: 'hight', label: 'Hight' },
		{ value: 'medium', label: 'Medium' },
		{ value: 'low', label: 'Low' },
	]

	return (
		<div>
			<p className="todo-label">Pick priority</p>
			<MultiSelect radius="xs" placeholder="Pick value" data={selectData} />
		</div>
	)
}

export default TodoPrioritySelect
