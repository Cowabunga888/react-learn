import { Select } from '@mantine/core'
import { useAppSelector } from 'src/store/redux-app-store/hooks'

function TodoPriorityFilter() {
	const todoState = useAppSelector((state) => state.todoForm)

	return (
		<div>
			<p className="todo-label">Pick priority</p>
			<Select
				radius="xs"
				placeholder="Pick value"
				data={todoState.filterPriorityList}
				defaultValue={todoState.filterPriorityList[0]}
				checkIconPosition="right"
			/>
		</div>
	)
}

export default TodoPriorityFilter
