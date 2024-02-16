import React, { createContext, useContext, useMemo } from 'react'

interface IGlobalState {
	children: React.ReactNode
}

const GlobalState = createContext<any>(null)

const useGlobalStateContext = () => {
	// this is a hook for getting GlobalState.Provider data value
	const globalDataContext = useContext(GlobalState)

	if (!globalDataContext) {
		throw new Error('useGlobalStateContext must be used inside GlobalStateProvider.')
	}

	return globalDataContext
}

function GlobalStateProvider({ children }: Readonly<IGlobalState>) {
	// Pass an empty array as dependency to create the object only once
	// useMemo to optimize performance and prevent unnecessary re-renders
	const data: any = useMemo(() => ({ data: 123 }), [])

	return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>
}

export { GlobalStateProvider, useGlobalStateContext }
