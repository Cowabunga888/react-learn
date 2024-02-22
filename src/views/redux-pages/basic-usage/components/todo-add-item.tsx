import { Button, Input, Select } from '@mantine/core'
import { ChangeEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/redux-app-store/hooks'
import { todoAddInputOnchange } from '../../../../store/redux-app-store/slices/todo-form-slice'
import { TODO_PRIOTITY } from '../../../../store/redux-app-store/types/type'
import { nanoid } from 'nanoid'

function TodoAddItem() {
	const todoState = useAppSelector((state) => state.todoForm)
	const todoDispatch = useAppDispatch()

	const selectData = [...todoState.filterPriorityList].filter((prio) => prio !== TODO_PRIOTITY.ALL)
	const defaultPriority = selectData[1]
	const [priority, setPriority] = useState<string | null>(defaultPriority)

	const handleAddInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const action = e.target.value
		todoDispatch(todoAddInputOnchange(action))
	}

	const handleAddButtonClick = () => {
		const todo = {
			id: nanoid(),
			label: todoState.todoInput,
			priority: {
				value: priority,
				label: priority,
			},
			status: false,
		}
		console.log(todo)
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
				defaultValue={defaultPriority}
				w={200}
				checkIconPosition="right"
				onChange={(e) => {
					setPriority(e)
				}}
			/>
			<Button onClick={handleAddButtonClick} radius="xs" variant="filled" color="lime" className="flex-shrink-0">
				Add
			</Button>
		</div>
	)
}

export default TodoAddItem
