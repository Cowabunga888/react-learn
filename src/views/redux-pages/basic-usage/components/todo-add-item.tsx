import { Button, Input, Select } from '@mantine/core'
import { ChangeEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/redux-app-store/hooks'
import { todoAddInputOnchange, todoAddTodo } from '../../../../store/redux-app-store/slices/todo-form-slice'
import { ITodoItem, TODO_PRIOTITY } from '../../../../store/redux-app-store/types/todo-form-type'
import { nanoid } from 'nanoid'

function TodoAddItem() {
	const todoState = useAppSelector((state) => state.todoForm)
	const todoDispatch = useAppDispatch()

	const selectData = [...todoState.filterPriorityList].filter((prio) => prio !== TODO_PRIOTITY.ALL)
	const defaultPriority = selectData[1]
	const [priority, setPriority] = useState<string | null>(defaultPriority)

	const handleAddInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		todoDispatch(todoAddInputOnchange(inputValue))
	}

	const handleAddButtonClick = () => {
		if (todoState.todoInput !== '') {
			const todo: ITodoItem = {
				id: nanoid(),
				label: todoState.todoInput,
				priority: {
					value: priority ?? defaultPriority,
					label: priority ?? defaultPriority,
				},
				status: false,
			}
			todoDispatch(todoAddTodo(todo))
			todoDispatch(todoAddInputOnchange(''))
			setPriority(defaultPriority)
		}
	}

	return (
		<div className="flex items-center justify-center gap-2 w-full">
			<Input
				value={todoState.todoInput}
				onChange={handleAddInputOnChange}
				radius="xs"
				placeholder="Add todo..."
				className="w-full"
			/>
			<Select
				radius="xs"
				placeholder="Pick value"
				data={selectData}
				value={priority}
				w={200}
				checkIconPosition="right"
				onChange={setPriority}
			/>
			<Button onClick={handleAddButtonClick} radius="xs" variant="filled" color="lime" className="flex-shrink-0">
				Add
			</Button>
		</div>
	)
}

export default TodoAddItem
