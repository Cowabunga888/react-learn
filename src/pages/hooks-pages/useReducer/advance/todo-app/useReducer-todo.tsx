import { Input } from '@mantine/core'
import { RiCloseLine } from '@remixicon/react'
import { ChangeEvent, KeyboardEvent, useReducer } from 'react'
import { todoActions } from './actions'
import { initialTodoState } from './init-states'
import { actionTypes } from './types'

// 1. init state
// 2. action
// 3. displach action: this func always return State || return State as default

function UseReducerTodoList() {
	const [todo, dispatchTodo] = useReducer(todoActions, initialTodoState)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatchTodo({
			type: actionTypes.INPUT_ONCHANGE,
			payload: e.target.value,
		})
	}

	const handlePressEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && todo.inputValue !== '') {
			dispatchTodo({
				type: actionTypes.ADD_TODO,
				payload: { name: todo.inputValue, status: false },
			})
		}
	}

	const handleMarkIsDone = (index: number) => {
		dispatchTodo({
			type: actionTypes.MARK_TODO_DONE,
			payload: { index },
		})
	}

	const handleDeleteTodo = (index: number) => {
		dispatchTodo({
			type: actionTypes.DELETE_TODO,
			payload: { index },
		})
	}

	return (
		<div className="flex flex-col gap-3 items-center justify-center">
			<Input
				placeholder="Press enter to add"
				size="xs"
				value={todo.inputValue}
				w={200}
				onChange={handleInputChange}
				onKeyUp={handlePressEnterKey}
			/>
			{todo.todoList.length > 0 && (
				<div className="border border-b rounded-md w-[350px]">
					{todo.todoList.map((todo, index) => {
						return (
							<div className="w-full p-2 flex items-center justify-between gap-1" key={index}>
								<button
									type="button"
									onClick={() => {
										handleMarkIsDone(index)
									}}
									className={todo.status ? 'line-through text-red-400' : ''}
								>
									{todo.name}
								</button>
								<button
									onClick={() => {
										handleDeleteTodo(index)
									}}
									type="button"
								>
									<RiCloseLine className="hover:text-red-400" />
								</button>
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default UseReducerTodoList
