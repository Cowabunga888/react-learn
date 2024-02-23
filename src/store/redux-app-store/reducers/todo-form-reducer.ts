import { PayloadAction } from '@reduxjs/toolkit'
import { ITodoFormState, ITodoItem } from '../types/todo-form-type'

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
	todoAddTodo: (state: ITodoFormState, action: PayloadAction<ITodoItem>) => {
		return {
			...state,
			todoList: [...state.todoList, action.payload],
		}
	},
	todoDeleteTodo: (state: ITodoFormState, action: PayloadAction<{ id: string }>) => {
		return {
			...state,
			todoList: state.todoList.filter((todo) => todo.id !== action.payload.id),
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
