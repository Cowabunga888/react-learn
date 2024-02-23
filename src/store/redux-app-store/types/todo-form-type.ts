export interface ITodoFormState {
	todoInput: string
	searchInput: string
	filterStatus: TODO_STATUS
	filterStatusList: TODO_STATUS[]
	filterPriority: TODO_PRIOTITY
	filterPriorityList: TODO_PRIOTITY[]
	selectPriority: TODO_PRIOTITY
	todoList: ITodoItem[]
}

export interface ITodoItem {
	id: string
	label: string
	priority: {
		value: string
		label: string
	}
	status: boolean
}

export enum TODO_PRIOTITY {
	HIGHT = 'HIGHT',
	MEDIUM = 'MEDIUM',
	LOW = 'LOW',
	ALL = 'ALL',
}
export enum TODO_STATUS {
	DONE = 'DONE',
	TO_DO = 'TO_DO',
	ALL = 'ALL',
}
