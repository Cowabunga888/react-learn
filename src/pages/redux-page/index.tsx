import { NavLink, Outlet } from 'react-router-dom'
import { AppConfig } from '../../app-config'

function ReduxPage() {
	const navData = Object.values(AppConfig.router.redux.children)

	return (
		<>
			<nav className="flex gap-3 items-center">
				{navData.map((nav, i) => {
					return (
						<NavLink to={nav.path} key={i} className="flex gap-1">
							<span>{nav.innerText}</span>
						</NavLink>
					)
				})}
			</nav>
			<Outlet />
		</>
	)
}

export default ReduxPage
