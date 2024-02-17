import { Outlet } from 'react-router-dom'
import { useAppStore } from './store/app-store/AppStoreProvider'

function App() {
	const appStoreData = useAppStore()
	console.log(appStoreData)

	return (
		<>
			<Outlet />
		</>
	)
}

export default App
