import { Group, Radio } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { useAppSelector } from '../../../../../../store/redux-app-store/hooks'

const style = {
	body: {
		display: 'flex',
		gap: 5,
	},
}
function TodoStatusFilter() {
	const todoState = useAppSelector((state) => state.todoForm)

	return (
		<div>
			<p className="todo-label">Filter by stattus</p>
			<Radio.Group defaultValue={todoState.filterStatus}>
				<Group className="flex gap-4">
					{todoState.filterStatusList.map((prio, i) => {
						return (
							<Radio
								key={randomId()}
								labelPosition="right"
								classNames={{ label: '!text-green-500' }}
								styles={style}
								value={prio}
								label={prio}
							/>
						)
					})}
				</Group>
			</Radio.Group>
		</div>
	)
}

export default TodoStatusFilter
