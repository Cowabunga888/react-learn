import React from 'react'
import { ThemeProvider } from './mantine-provider/theme-provider'
import AppMantineProvider from './mantine-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppReduxStoreProvider from './app-redux-store-provider'
import { AppContextStoreProvider } from '../../store/context-app-store/app-store-provider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'

interface IProvider {
	children: React.ReactNode
}

const queryClient = new QueryClient()

function AppProvider({ children }: IProvider) {
	return (
		<ThemeProvider>
			<AppMantineProvider>
				<QueryClientProvider client={queryClient}>
					<AppReduxStoreProvider>
						<AppContextStoreProvider>{children}</AppContextStoreProvider>
					</AppReduxStoreProvider>
					<ReactQueryDevtools initialIsOpen={false} />
					<Toaster />
				</QueryClientProvider>
			</AppMantineProvider>
		</ThemeProvider>
	)
}

export default AppProvider
