import { Accordion, Badge, Tooltip } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import clsx from 'clsx'
import { NavLink, useLocation } from 'react-router-dom'
import './css/style.css'

interface IPageSideBar {
	sidebarData: {
		title: string
		path: string
		icon: React.ReactNode | string | number
		items: {
			innerText: string
			path: string
			disable?: boolean
		}[]
	}[]
}

function PageSideBar({ sidebarData }: Readonly<IPageSideBar>) {
	const { pathname } = useLocation()

	return (
		<Accordion defaultValue={sidebarData[0].title} className="mt-2 sidebar-accordion">
			{sidebarData.map((acc) => {
				return (
					<Accordion.Item key={randomId()} value={acc.title}>
						<Accordion.Control icon={acc.icon}>
							<span className="text-xs">{acc.title}</span>
						</Accordion.Control>
						{acc.items.map((item) => {
							if (item?.disable) {
								return (
									<Accordion.Panel
										pos={'relative'}
										classNames={{ content: '!p-2 flex justify-between gap-2 !w-full' }}
										key={randomId()}
										className={clsx(
											{ 'ml-2 border-l-2 border-[var(--mantine-color-color-filled)]': true },
											{ 'cursor-not-allowed text-gray-400': true }
										)}
									>
										<span className="text-xs truncate">{item.innerText}</span>
										<Badge className="flex-shrink-0" size="xs" variant="light">
											soon!
										</Badge>
									</Accordion.Panel>
								)
							}
							return (
								<NavLink to={item.path} key={randomId()}>
									<Accordion.Panel
										classNames={{ content: '!p-2 flex !w-full' }}
										className={clsx(
											{ 'ml-2 border-l-2 border-[var(--mantine-color-color-filled)]': true },
											{
												'bg-[var(--mantine-color-color-light)]': pathname.includes(item.path),
											}
										)}
									>
										<span className="text-xs truncate">{item.innerText}</span>
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

export default PageSideBar
