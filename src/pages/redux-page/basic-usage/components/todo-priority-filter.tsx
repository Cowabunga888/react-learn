import { Group, Radio } from '@mantine/core'

const style = {
	body: {
		display: 'flex',
		gap: 10,
	},
}
function TodoPriorityFilter() {
	return (
		<div>
			<p className="todo-label">Filter by stattus</p>
			<Radio.Group>
				<Group className="flex gap-4">
					<Radio styles={style} color="lime" value="hight" label="Hight" />
					<Radio styles={style} color="lime" value="medium" label="Medium" />
					<Radio styles={style} color="lime" value="low" label="Low" />
				</Group>
			</Radio.Group>
		</div>
	)
}

export default TodoPriorityFilter
