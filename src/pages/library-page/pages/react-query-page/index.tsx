import { randomId } from '@mantine/hooks'
import { RiReactjsLine } from '@remixicon/react'
import { NavLink, Outlet } from 'react-router-dom'
import { AppConfig } from '../../../../app-config'

function ReactQueryPage() {
	const navData = Object.values(AppConfig.router.reactQuery.children)

	return (
		<div className="p-2">
			<div className="p-2 text-center text-xl text-[var(--mantine-color-color-filled)] font-bold uppercase flex items-center justify-center">
				<RiReactjsLine /> <span>React Query</span>
			</div>

			<nav className="flex gap-3 items-center py-2">
				{navData.map((nav, i) => {
					return (
						<NavLink to={nav.path} key={randomId()} className="flex gap-1">
							<span className="font-bold text-[var(--mantine-color-color-filled)]">#</span>
							<span>{nav.innerText}</span>
						</NavLink>
					)
				})}
			</nav>

			<div className="w-full h-full">
				<Outlet />
			</div>
		</div>
	)
}

export default ReactQueryPage
