import { Input } from '@mantine/core'
import { ChangeEvent, useReducer } from 'react'
import { todoReducer } from './reducers'
import { initialTodoState } from './states'
import { ACTION_TYPE } from './types/todo-type'

function UseReducerTodoList() {
	const [todoList, dispatch] = useReducer(todoReducer, initialTodoState)
	console.log(todoList)

	const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: ACTION_TYPE.TODO_INPUT,
			payload: {
				todoInput: e.target.value,
			},
		})
	}
	return (
		<Input
			placeholder="Input price"
			size="xs"
			value={todoList.todoInput}
			w={200}
			onChange={(e) => {
				handleInputOnChange(e)
			}}
		/>
	)
}

export default UseReducerTodoList
