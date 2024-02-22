import { PayloadAction } from '@reduxjs/toolkit'
import { ITodoFormState } from '../types/type'

const todoFormReducer = {
	todoInputOnchange: (state: ITodoFormState, action: PayloadAction<string>) => {
		return {
			...state,
			searchInput: action.payload,
		}
	},
	todoAddInputOnchange: (state: ITodoFormState, action: PayloadAction<string>) => {
		return {
			...state,
			todoInput: action.payload,
		}
	},
	todoMarkItemAsDone: (state: ITodoFormState, action: PayloadAction<{ id: string }>) => {
		return {
			...state,
			todoList: state.todoList.map((todo: any) => {
				if (todo.id === action.payload.id) {
					todo = { ...todo, status: !todo.status }
				}
				return todo
			}),
		}
	},
}

export default todoFormReducer
