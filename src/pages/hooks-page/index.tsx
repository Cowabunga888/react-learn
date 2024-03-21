import { RiReactjsLine } from '@remixicon/react'
import { NavLink, Outlet } from 'react-router-dom'
import { AppConfig } from '../../app-config'

function HooksPage() {
	const navData = Object.values(AppConfig.router.hooks.children)

	return (
		<div className="p-2">
			<div className="p-2 text-center text-xl text-[#788AEB] font-bold uppercase flex items-center justify-center">
				<RiReactjsLine /> <span>React Hooks</span>
			</div>

			<nav className="flex gap-3 items-center py-2">
				{navData.map((nav, i) => {
					return (
						<NavLink to={nav.path} key={i} className="flex gap-1">
							<span className="font-bold text-[#788AEB]">#</span>
							<span>{nav.innerText}</span>
						</NavLink>
					)
				})}
			</nav>

			<Outlet />
		</div>
	)
}

export default HooksPage
