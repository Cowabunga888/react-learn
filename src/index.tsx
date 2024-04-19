import ReactDOM from 'react-dom/client'
import AppRouterProvider from './components/providers/app-router-provider'
import reportWebVitals from './reportWebVitals'

import './global.css'
import '@mantine/core/styles.css'
import Provider from './components/providers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	// <React.StrictMode>
	<Provider>
		<AppRouterProvider />
	</Provider>
	// </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
