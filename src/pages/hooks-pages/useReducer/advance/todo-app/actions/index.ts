import { ITodoAction, ITodoState } from '../types/todo-type'

export const todoAction = () => {
	return {
		handleChangeTodoInput: (todoList: ITodoState, action: ITodoAction) => {
			return {
				...todoList,
				todoInput: action.payload.todoInput,
			}
		},
	}
}
