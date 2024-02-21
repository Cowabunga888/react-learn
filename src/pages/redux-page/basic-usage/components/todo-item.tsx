import { Checkbox } from '@mantine/core'
import { RiCloseLine } from '@remixicon/react'

const TodoItem = () => {
	const todoColorSpot = (todoPriority: string) => {
		switch (todoPriority) {
			case 'hight':
				return 'w-4 h-4 rounded-sm bg-red-300'
			case 'medium':
				return 'w-4 h-4 rounded-sm bg-yellow-300'
			case 'low':
				return 'w-4 h-4 rounded-sm bg-green-300'
			default:
				return 'w-4 h-4 rounded-sm bg-red-300'
		}
	}

	return (
		<div className="flex items-center justify-between">
			<div className="flex gap-2 items-center cursor-pointer">
				<Checkbox color="lime" />
				<span>Todo 01</span>
				<span className={todoColorSpot('low')} />
			</div>
			<button type="button">
				<RiCloseLine className="hover:text-red-400" />
			</button>
		</div>
	)
}

export default TodoItem
