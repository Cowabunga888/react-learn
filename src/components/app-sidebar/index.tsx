import { Accordion } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import clsx from 'clsx'
import { NavLink, useMatches } from 'react-router-dom'
import useSidebarMap from './hooks'
import './style/style.css'
function AppSideBar() {
	const sidebarMap = useSidebarMap()
	const matches = useMatches()

	return (
		<Accordion defaultValue={sidebarMap[0].title} className="mt-2 sidebar-accordion">
			{sidebarMap.map((acc) => {
				return (
					<Accordion.Item key={randomId()} value={acc.title}>
						<Accordion.Control icon={acc.icon}>{acc.title}</Accordion.Control>
						{acc.items.map((item) => {
							return (
								<NavLink to={item.path} key={randomId()}>
									<Accordion.Panel
										classNames={{ content: '!p-2' }}
										className={clsx(
											{ 'ml-2 border-l-2 border-lime-400': true },
											{
												'bg-lime-100':
													matches.filter((match) => match.pathname.includes(item.path))
														.length > 0,
											}
										)}
									>
										{item.innerText}
									</Accordion.Panel>
								</NavLink>
							)
						})}
					</Accordion.Item>
				)
			})}
		</Accordion>
	)
}

export default AppSideBar
