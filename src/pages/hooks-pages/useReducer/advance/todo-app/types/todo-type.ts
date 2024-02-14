export interface ITodo {
	name: string
	status: string
}

export interface ITodoState {
	todoInput: string
	todoList: ITodo[]
}

export interface ITodoAction {
	type: ACTION_TYPE
	payload: ITodo | ITodoState | any
}

export enum ACTION_TYPE {
	TODO_INPUT = 'TODO_INPUT',
	ADD_TODO = 'ADD_TODO',
	DELETE_TODO = 'DELETE_TODO',
}
