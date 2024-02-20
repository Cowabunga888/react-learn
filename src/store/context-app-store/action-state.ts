import { ActionTypes, IGlobalStateActions, IGlobalStateContext } from './store-type'

export const globalStateHanlder = (state: IGlobalStateContext, action: IGlobalStateActions) => {
	switch (action.type) {
		case ActionTypes.COUNTER_ADD:
			return {
				...state,
				counter: state.counter + 1,
			}
		case ActionTypes.COUNTER_MINUS:
			return {
				...state,
				counter: state.counter - 1,
			}
		case ActionTypes.INPUT_CHANGE:
			return {
				...state,
				todoInput: action.payload,
			}
		case ActionTypes.ADD_TODO:
			state.todoList.push(action.payload)
			return { ...state }
		case ActionTypes.DELETE_TODO:
			state.todoList.splice(action.payload.index, 1)
			return { ...state }
		case ActionTypes.MARK_TODO_AS_DONE:
			state.todoList[action.payload.index].status = !state.todoList[action.payload.index].status
			return { ...state }

		default:
			return state
	}
}
