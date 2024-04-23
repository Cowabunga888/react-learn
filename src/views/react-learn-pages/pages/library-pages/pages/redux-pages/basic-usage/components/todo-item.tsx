import { Checkbox } from '@mantine/core'
import { RiCloseLine } from '@remixicon/react'
import { useAppDispatch } from 'src/store/redux-app-store/hooks'
import { todoDeleteTodo, todoMarkItemAsDone } from 'src/store/redux-app-store/slices/todo-form-slice'
import { ITodoItem, TODO_PRIOTITY } from 'src/store/redux-app-store/types/todo-form-type'

interface ITodoItemProps {
	todo: ITodoItem
}

const TodoItem = ({ todo }: ITodoItemProps) => {
	const checked = todo.status
	const dispatch = useAppDispatch()

	const handleMarkTodo = () => {
		dispatch(todoMarkItemAsDone({ id: todo.id }))
	}

	const handleDeleteTodo = () => {
		dispatch(todoDeleteTodo({ id: todo.id }))
	}

	const todoColorSpot = (todoPriority: string) => {
		switch (todoPriority) {
			case TODO_PRIOTITY.HIGHT:
				return 'bg-red-300'
			case TODO_PRIOTITY.MEDIUM:
				return 'bg-yellow-300'
			case TODO_PRIOTITY.LOW:
				return 'bg-green-300'
			default:
				return 'bg-yellow-300'
		}
	}

	return (
		<div className="flex items-center justify-between">
			<button type="button" className="flex gap-2 items-center">
				<Checkbox
					checked={checked}
					onChange={handleMarkTodo}
					label={todo.label}
					labelPosition="right"
					classNames={{
						body: `flex flex-row-reverse gap-2 ${todo.status && 'line-through text-[#999] italic'}`,
					}}
				/>
				<span className={`w-4 h-4 rounded-sm  ${todoColorSpot(todo.priority.value)}`} />
			</button>
			<button type="button" onClick={handleDeleteTodo}>
				<RiCloseLine className="hover:text-red-400" />
			</button>
		</div>
	)
}

export default TodoItem
