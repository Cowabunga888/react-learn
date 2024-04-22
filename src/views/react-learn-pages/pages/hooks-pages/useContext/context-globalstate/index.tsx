import { Input } from '@mantine/core'
import { RiCloseLine } from '@remixicon/react'
import { ChangeEvent, KeyboardEvent } from 'react'
import { useAppStore } from '../../../../../../store/context-app-store/app-store-provider'
import { ActionTypes, ITodo } from '../../../../../../store/context-app-store/store-type'

function UseContextWithGlobalState() {
	const { state, dispatch } = useAppStore()

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === '') return
		dispatch({ type: ActionTypes.INPUT_CHANGE, payload: e.target.value })
	}

	const handlePressEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
		if (state.todoInput === '') return
		if (e.key === 'Enter') {
			dispatch({ type: ActionTypes.INPUT_CHANGE, payload: '' })
			dispatch({ type: ActionTypes.ADD_TODO, payload: { name: state.todoInput, status: false } })
		}
	}

	const handleMarkIsDone = (index: number) => {
		dispatch({ type: ActionTypes.MARK_TODO_AS_DONE, payload: { index } })
	}

	const handleDeleteTodo = (index: number) => {
		dispatch({ type: ActionTypes.DELETE_TODO, payload: { index } })
	}

	return (
		<div className="flex flex-col gap-3 items-center justify-center">
			<Input
				placeholder="Press enter to add"
				size="xs"
				value={state.todoInput}
				w={200}
				onChange={handleInputChange}
				onKeyUp={handlePressEnterKey}
			/>
			{state.todoList.length > 0 && (
				<div className="border border-b rounded-md w-[350px]">
					{state.todoList.map((todo: ITodo, index: number) => {
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

export default UseContextWithGlobalState
