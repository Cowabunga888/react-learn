import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouterProvider from './components/providers/react-router-provider'
import './index.css'
import reportWebVitals from './reportWebVitals'
import AppMantineProvider from './components/providers/mantine-provider'
import { GlobalStateProvider } from './pages/hooks-pages/useContext/advance'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	// <React.StrictMode>
	<AppMantineProvider>
		<GlobalStateProvider>
			<AppRouterProvider />
		</GlobalStateProvider>
	</AppMantineProvider>
	// </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
