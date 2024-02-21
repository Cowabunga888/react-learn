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
					<Radio
						labelPosition="right"
						classNames={{ label: '!text-blue-500' }}
						styles={style}
						color="lime"
						value="all"
						label="All"
					/>
					<Radio
						labelPosition="right"
						classNames={{ label: '!text-red-500' }}
						styles={style}
						color="lime"
						value="hight"
						label="Hight"
					/>
					<Radio
						labelPosition="right"
						classNames={{ label: '!text-yellow-500' }}
						styles={style}
						color="lime"
						value="medium"
						label="Medium"
					/>
					<Radio
						labelPosition="right"
						classNames={{ label: '!text-green-500' }}
						styles={style}
						color="lime"
						value="low"
						label="Low"
					/>
				</Group>
			</Radio.Group>
		</div>
	)
}

export default TodoPriorityFilter
