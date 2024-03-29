import { Outlet } from 'react-router-dom'
import AppBody from './components/app-body'
import AppHeader from './components/app-header'
import AppModal from './components/app-modal'

function App() {
	return (
		<>
			<AppHeader />
			<AppBody>
				<Outlet />
			</AppBody>
			<AppModal />
		</>
	)
}

export default App
