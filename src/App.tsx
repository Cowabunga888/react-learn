import { Outlet } from 'react-router-dom'
import AppBody from './components/app-body'

function App() {
	return (
		<>
			<AppBody>
				<Outlet />
			</AppBody>
		</>
	)
}

export default App
