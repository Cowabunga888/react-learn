import { Checkbox } from '@mantine/core'
import { RiCloseLine } from '@remixicon/react'
import { ITodoItem } from '../../../../store/redux-app-store/types/type'
import { useState } from 'react'
import { useAppDispatch } from '../../../../store/redux-app-store/hooks'
import { todoMarkItemAsDone } from '../../../../store/redux-app-store/slices/todo-form-slice'

interface ITodoItemProps {
	todo: ITodoItem
}

const TodoItem = ({ todo }: ITodoItemProps) => {
	const checked = todo.status
	const dispatch = useAppDispatch()

	const handleMarkTodo = () => {
		dispatch(todoMarkItemAsDone({ id: todo.id }))
	}

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
			<button type="button" className="flex gap-2 items-center">
				<Checkbox
					checked={checked}
					onChange={handleMarkTodo}
					color="lime"
					label={todo.label}
					labelPosition="right"
					classNames={{
						body: `flex flex-row-reverse gap-2 ${todo.status && 'line-through text-[#999] italic'}`,
					}}
				/>
				<span className={todoColorSpot(todo.priority.value)} />
			</button>
			<button type="button">
				<RiCloseLine className="hover:text-red-400" />
			</button>
		</div>
	)
}

export default TodoItem
