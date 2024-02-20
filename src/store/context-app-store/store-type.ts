export interface IGlobalStateContext {
	counter: number
	todoInput: ''
	todoList: ITodo[]
}

export interface IGlobalStateActions {
	type: ActionTypes
	payload: any
}

export interface ITodo {
	name: string
	status: boolean
}

export enum ActionTypes {
	COUNTER_ADD = 'COUNTER_ADD',
	COUNTER_MINUS = 'COUNTER_MINUS',
	INPUT_CHANGE = 'INPUT_CHANGE',
	ADD_TODO = 'ADD_TODO',
	DELETE_TODO = 'DELETE_TODO',
	MARK_TODO_AS_DONE = 'MARK_TODO_AS_DONE',
}
