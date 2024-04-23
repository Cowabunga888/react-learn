import { NavLink, Outlet } from 'react-router-dom'
import { randomId } from '@mantine/hooks'
import { AppConfig } from 'src/app-config'

function ReduxPage() {
	const navData = Object.values(AppConfig.router.reactLearn.children.library.children.redux.children)

	return (
		<div className="flex flex-col">
			<nav className="flex gap-3 items-center">
				{navData.map((nav) => {
					return (
						<NavLink to={nav.path} key={randomId()} className="flex gap-1">
							<span>{nav.innerText}</span>
						</NavLink>
					)
				})}
			</nav>

			<Outlet />
		</div>
	)
}

export default ReduxPage
