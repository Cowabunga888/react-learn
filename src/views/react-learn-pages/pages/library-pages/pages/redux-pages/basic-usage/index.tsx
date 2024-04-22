import { ScrollArea } from '@mantine/core'
import TodoAddItem from './components/todo-add-item'
import TodoItem from './components/todo-item'
import TodoPriorityFilter from './components/todo-priority-filter'
import TodoSearchInput from './components/todo-search-input'
import TodoStatusFilter from './components/todo-status-filter'
import './style.css'
import { randomId } from '@mantine/hooks'
import { useAppSelector } from '../../../../../../../store/redux-app-store/hooks'

function ReduxBasicUsage() {
	const todoState = useAppSelector((state) => state.todoForm)

	return (
		<div className="py-3">
			<div className="todo-form">
				<h2 className="todo-header">Todo app</h2>

				<TodoSearchInput />

				<TodoStatusFilter />

				<TodoPriorityFilter />

				<ScrollArea h={300} className="border border-dashed rounded-sm">
					<div className="flex flex-col gap-3 p-2">
						{todoState.todoList.map((todo, i) => {
							return <TodoItem todo={todo} key={randomId()} />
						})}
					</div>
				</ScrollArea>

				<TodoAddItem />
			</div>
		</div>
	)
}

export default ReduxBasicUsage
