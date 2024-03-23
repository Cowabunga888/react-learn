import { NavLink } from 'react-router-dom'
import useNavData from './hooks/data'
import './style/style.css'

function AppHeader() {
	const navData = useNavData()

	return (
		<header className="app-header">
			<nav className="app-header__nav-container">
				{navData.map((nav, i) => {
					return (
						<NavLink to={nav.path} key={i} className="flex gap-1">
							<span>{nav.icon}</span>
							<span>{nav.innerText}</span>
						</NavLink>
					)
				})}
			</nav>
		</header>
	)
}

export default AppHeader
