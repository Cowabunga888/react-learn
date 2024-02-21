import { ScrollArea } from '@mantine/core'
import TodoAddItem from './components/todo-add-item'
import TodoItem from './components/todo-item'
import TodoPriorityFilter from './components/todo-priority-filter'
import TodoPrioritySelect from './components/todo-priority-select'
import TodoSearch from './components/todo-search'
import './style.css'

function ReduxBasicUsage() {
	return (
		<div>
			<div className="todo-form">
				<h2 className="todo-header">Todo app</h2>

				<TodoSearch />

				<TodoPriorityFilter />

				<TodoPrioritySelect />

				<ScrollArea h={300} className="border border-dashed rounded-sm">
					<div className="flex flex-col gap-3">
						<TodoItem />
					</div>
				</ScrollArea>

				<TodoAddItem />
			</div>
		</div>
	)
}

export default ReduxBasicUsage
