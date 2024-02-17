import ReactDOM from 'react-dom/client'
import AppMantineProvider from './components/providers/mantine-provider'
import AppRouterProvider from './components/providers/react-router-provider'
import reportWebVitals from './reportWebVitals'
import { AppStoreProvider } from './store/app-store/AppStoreProvider'

import './global.css'
import '@mantine/core/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	// <React.StrictMode>
	<AppMantineProvider>
		<AppStoreProvider>
			<AppRouterProvider />
		</AppStoreProvider>
	</AppMantineProvider>
	// </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
