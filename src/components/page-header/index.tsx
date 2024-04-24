import { randomId } from '@mantine/hooks'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import AuthNavbarButtons from '../app-auth/auth-navbar-buttons'
import './css/style.css'
import useNavData from './hooks/data'

function PageNavigationHeader() {
	const navData = useNavData()
	const { pathname } = useLocation()
	return (
		<header className="app-header">
			<nav className="app-header__nav-container">
				{navData.map((nav) => {
					console.log(nav.path)
					return (
						<Link
							to={'/' + nav.path}
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
						</Link>
					)
				})}
			</nav>

			<section className="actions">
				<AuthNavbarButtons />
			</section>
		</header>
	)
}

export default PageNavigationHeader
