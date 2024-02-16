import './App.css'
import { useGlobalStateContext } from './pages/hooks-pages/useContext/advance'

function App() {
	const globalData = useGlobalStateContext()
	console.log(globalData)

	return <div className="App">app</div>
}

export default App
