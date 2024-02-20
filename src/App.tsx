import { Outlet } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'

function App() {
	return (
		<>
			<AppHeader />
			<Outlet />
			<AppFooter />
		</>
	)
}

export default App
