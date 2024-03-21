import { IToDoActions, IToDoState, actionTypes } from '../types'

export const todoActions = (state: IToDoState, action: IToDoActions) => {
	switch (action.type) {
		case actionTypes.INPUT_ONCHANGE:
			return {
				...state,
				inputValue: action.payload,
			}
		case actionTypes.ADD_TODO:
			state.todoList.push({
				name: action.payload.name,
				status: action.payload.status,
			})
			return {
				...state,
				inputValue: '',
			}
		case actionTypes.MARK_TODO_DONE:
			state.todoList.map((todo, i) => {
				if (i === action.payload.index) {
					todo.status = !todo.status
				}
				return todo
			})
			return {
				...state,
			}
		case actionTypes.DELETE_TODO:
			state.todoList.splice(action.payload.index, 1)
			return {
				...state,
			}
		default:
			return state
	}
}
