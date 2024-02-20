import { IGlobalStateContext } from './store-type'

export const initialGlobalState: IGlobalStateContext = {
	counter: 123456789,
	todoInput: '',
	todoList: [
		{ name: 'todo 01', status: false },
		{ name: 'todo 02', status: false },
		{ name: 'todo 03', status: false },
	],
}
