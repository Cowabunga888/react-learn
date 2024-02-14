import { ACTION_TYPE, ITodoAction, ITodoState } from '../types/todo-type'

export const todoReducer = (state: ITodoState, action: ITodoAction) => {
	switch (action.type) {
		case ACTION_TYPE.TODO_INPUT:
			return state
		case ACTION_TYPE.ADD_TODO:
			return state
		case ACTION_TYPE.DELETE_TODO:
			return state
		default:
			return state
	}
}
