import { randomId } from '@mantine/hooks'
import clsx from 'clsx'
import { NavLink, useLocation } from 'react-router-dom'
import AuthNavbarButtons from '../app-auth/auth-navbar-buttons'
import './css/style.css'
import useNavData from './hooks/data'

function AppHeader() {
	const navData = useNavData()
	const { pathname } = useLocation()

	return (
		<header className="app-header">
			{/* <NavLink to={'/'} className="flex gap-3 items-center">
				<span className="p-2 rounded-md border border-dashed">
					<RiAncientGateFill color="var(--mantine-color-color-filled)" />
				</span>
				<span>Home</span>
			</NavLink> */}

			<nav className="app-header__nav-container">
				{navData.map((nav) => {
					return (
						<NavLink
							to={nav.path}
							key={randomId()}
							className={clsx(
								{ 'flex gap-1': true },
								{
									'text-[var(--mantine-color-color-filled)]': pathname
										.split('/')
										.splice(1)
										.includes(nav.path),
								}
							)}
						>
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
