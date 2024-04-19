import { randomId } from '@mantine/hooks'
import { RiAncientGateFill } from '@remixicon/react'
import { NavLink } from 'react-router-dom'
import AuthNavbarButtons from '../app-auth/auth-navbar-buttons'
import useNavData from './hooks/data'
import './style/style.css'

function AppHeader() {
	const navData = useNavData()

	return (
		<header className="app-header">
			<NavLink to={'/'} className="flex gap-3 items-center">
				<span className="p-2 rounded-md border border-dashed">
					<RiAncientGateFill />
				</span>
				<span>Home</span>
			</NavLink>

			<nav className="app-header__nav-container">
				{navData.map((nav, i) => {
					return (
						<NavLink to={nav.path} key={randomId()} className="flex gap-1">
							<span>{nav.icon}</span>
							<span>{nav.innerText}</span>
						</NavLink>
					)
				})}
			</nav>

			<section className="actions">
				<AuthNavbarButtons />
			</section>
		</header>
	)
}

export default AppHeader
