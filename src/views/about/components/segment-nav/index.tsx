import { Avatar, Menu, SegmentedControl } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { useResponsiveDevice } from 'src/hooks'
import './style.css'
import { memo } from 'react'

interface ISegmentNav {
	navData: { value: string; data: { label: React.ReactNode; value: string }[] }
	handlesetNavData: (id: string) => void
}

function SegmentNav({ navData, handlesetNavData }: Readonly<ISegmentNav>) {
	const device = useResponsiveDevice()

	if (device === 'mobile') {
		return (
			<div className="sticky top-3 flex justify-end px-2">
				<Menu withArrow shadow="md" width={150}>
					<Menu.Target>
						<Avatar
							radius="xl"
							src={
								'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png'
							}
						/>
					</Menu.Target>

					<Menu.Dropdown>
						{navData.data.map((nav) => {
							return (
								<Menu.Item
									onClick={() => {
										handlesetNavData(nav.value)
									}}
									key={randomId()}
									classNames={{ itemLabel: 'text-xs' }}
								>
									{nav.label}
								</Menu.Item>
							)
						})}
					</Menu.Dropdown>
				</Menu>
			</div>
		)
	}

	return (
		<div className="segment-container">
			<div className="segment-content">
				<Avatar
					radius="xl"
					src={'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png'}
				/>
				<SegmentedControl
					classNames={{ root: '!bg-transparent' }}
					withItemsBorders={false}
					radius="xl"
					value={navData.value}
					data={navData.data}
				/>
			</div>
		</div>
	)
}

export default memo(SegmentNav)
