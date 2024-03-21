import React from 'react'
import { Provider } from 'react-redux'
import { appStore } from '../../../store/redux-app-store'

interface IAppReduxStoreProvider {
	children: React.ReactNode
}

function AppReduxStoreProvider({ children }: IAppReduxStoreProvider) {
	return <Provider store={appStore}>{children}</Provider>
}

export default AppReduxStoreProvider
