export interface IToDoState {
	inputValue: string
	todoList: {
		name: string
		status: boolean
	}[]
}

export interface IToDoActions {
	type: actionTypes
	payload: any
}

export enum actionTypes {
	INPUT_ONCHANGE = 'INPUT_ONCHANGE',
	ADD_TODO = 'ADD_TODO',
	MARK_TODO_DONE = 'MARK_TODO_DONE',
	DELETE_TODO = 'DELETE_TODO',
}
