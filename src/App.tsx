import { Outlet } from 'react-router-dom'
import AppBody from './components/app-body'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'

function App() {
	return (
		<>
			<AppHeader />
			<AppBody>
				<Outlet />
			</AppBody>
			<AppFooter />
		</>
	)
}

export default App
