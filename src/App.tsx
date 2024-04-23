import { Outlet } from 'react-router-dom'
import AppBody from './components/app-body'
import AppHeader from './components/app-header'

function App() {
	return (
		<>
			<AppHeader />
			<AppBody>
				<Outlet />
			</AppBody>
		</>
	)
}

export default App
