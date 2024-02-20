import React, { createContext, useContext, useReducer } from 'react'
import { initialGlobalState } from './init-state'
import { globalStateHanlder } from './action-state'

const AppStoreContext = createContext<any>(null)

interface IAppStore {
	children: React.ReactNode
}

const useAppStore = () => {
	// this hook allows all components get globalState to use
	const context = useContext(AppStoreContext)
	return context
}

function AppStoreProvider({ children }: IAppStore) {
	const [state, dispatch] = useReducer(globalStateHanlder, initialGlobalState)

	return <AppStoreContext.Provider value={{ state, dispatch }}>{children}</AppStoreContext.Provider>
}

export { AppStoreProvider, useAppStore }
