import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { todoFormReducer } from '../reducers'
import { ITodoFormState, TODO_PRIOTITY, TODO_STATUS } from '../types/type'

const innitialTodoFormState: ITodoFormState = {
	todoInput: '',
	searchInput: '',
	filterStatus: TODO_STATUS.ALL,
	filterStatusList: [TODO_STATUS.ALL, TODO_STATUS.DONE, TODO_STATUS.TO_DO],
	filterPriority: TODO_PRIOTITY.ALL,
	filterPriorityList: [TODO_PRIOTITY.ALL, TODO_PRIOTITY.HIGHT, TODO_PRIOTITY.MEDIUM, TODO_PRIOTITY.LOW],
	selectPriority: TODO_PRIOTITY.MEDIUM,
	todoList: [
		{ id: '001', label: 'Todo 01', priority: { value: TODO_PRIOTITY.LOW, label: 'Low' }, status: false },
		{ id: '002', label: 'Todo 02', priority: { value: TODO_PRIOTITY.HIGHT, label: 'Hight' }, status: true },
		{ id: '003', label: 'Todo 03', priority: { value: TODO_PRIOTITY.MEDIUM, label: 'Medium' }, status: false },
	],
}

const todoFormSlice = createSlice({
	name: 'todo-form-slice',
	initialState: innitialTodoFormState,
	reducers: {
		todoInputOnchange: (state, action: PayloadAction<string>) => todoFormReducer.todoInputOnchange(state, action),
		todoAddInputOnchange: (state, action: PayloadAction<string>) =>
			todoFormReducer.todoAddInputOnchange(state, action),
		todoMarkItemAsDone: (state, action: PayloadAction<{ id: string }>) =>
			todoFormReducer.todoMarkItemAsDone(state, action),
	},
})

export const { todoInputOnchange, todoAddInputOnchange, todoMarkItemAsDone } = todoFormSlice.actions

export default todoFormSlice.reducer
