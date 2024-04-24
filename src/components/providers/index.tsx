import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { AppContextStoreProvider } from 'src/store/context-app-store/app-store-provider'
import AppModal from '../app-modal'
import AppReduxStoreProvider from './app-redux-store-provider'
import AppMantineProvider from './mantine-provider'
import { ThemeProvider } from './mantine-provider/theme-provider'

interface IProvider {
	children: React.ReactNode
}

const queryClient = new QueryClient()

function AppProvider({ children }: Readonly<IProvider>) {
	return (
		<ThemeProvider>
			<AppMantineProvider>
				<QueryClientProvider client={queryClient}>
					<AppReduxStoreProvider>
						<AppContextStoreProvider>{children}</AppContextStoreProvider>
					</AppReduxStoreProvider>
					<ReactQueryDevtools initialIsOpen={false} />
					<AppModal />
					<Toaster />
				</QueryClientProvider>
			</AppMantineProvider>
		</ThemeProvider>
	)
}

export default AppProvider
