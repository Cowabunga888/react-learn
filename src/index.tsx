import ReactDOM from 'react-dom/client'
import AppMantineProvider from './components/providers/mantine-provider'
import AppRouterProvider from './components/providers/react-router-provider'
import reportWebVitals from './reportWebVitals'
import { AppContextStoreProvider } from './store/context-app-store/app-store-provider'
import AppReduxStoreProvider from './components/providers/app-redux-store-provider'

import './global.css'
import '@mantine/core/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	// <React.StrictMode>
	<AppMantineProvider>
		<AppReduxStoreProvider>
			<AppContextStoreProvider>
				<AppRouterProvider />
			</AppContextStoreProvider>
		</AppReduxStoreProvider>
	</AppMantineProvider>
	// </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
