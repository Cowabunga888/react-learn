import { Button, Input } from '@mantine/core'
import { RiSearch2Line } from '@remixicon/react'
import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../../../../store/redux-app-store/hooks'
import { todoInputOnchange } from '../../../../../../../../store/redux-app-store/slices/todo-form-slice'

function TodoSearchInput() {
	const todoState = useAppSelector((state) => state.todoForm)
	const todoDispatch = useAppDispatch()

	const handleSearchInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const action = e.target.value
		todoDispatch(todoInputOnchange(action))
	}

	return (
		<div>
			<p className="todo-label">Search</p>
			<div className="flex items-center justify-center gap-2 w-full">
				<Input
					onChange={handleSearchInputOnChange}
					value={todoState.searchInput}
					name="search-input"
					radius="xs"
					placeholder="Search todo..."
					className="w-full"
				/>
				<Button radius="xs" variant="filled">
					<RiSearch2Line size={18} />
				</Button>
			</div>
		</div>
	)
}

export default TodoSearchInput
