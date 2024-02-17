import React, { createContext, useContext } from 'react'

const AppStoreContext = createContext<any>(null)

interface IAppStore {
	children: React.ReactNode
}

const useAppStore = () => {
	const context = useContext(AppStoreContext)
	return context
}

function AppStoreProvider({ children }: IAppStore) {
	return <AppStoreContext.Provider value={{ data: 123456789 }}>{children}</AppStoreContext.Provider>
}

export { AppStoreProvider, useAppStore }
