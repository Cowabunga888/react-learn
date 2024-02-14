import { ITodoState } from '../types/todo-type'

export const initialTodoState: ITodoState = {
	todoInput: '',
	todoList: [{ name: 'todo 01', status: 'DONE' }],
}
