import { Avatar, Indicator, Menu, SegmentedControl } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { memo } from 'react'
import { useResponsiveDevice } from 'src/hooks'

import DownLoadCVButton from 'src/components/button/download-cv-button'
import './style.css'

interface ISegmentNav {
	navData: { value: string; data: { label: React.ReactNode; value: string }[] }
	handlesetNavData: (id: string) => void
}

function SegmentNav({ navData, handlesetNavData }: Readonly<ISegmentNav>) {
	const device = useResponsiveDevice()

	if (device === 'mobile') {
		return (
			<div className="sticky top-3 flex justify-end px-2 z-10">
				<Menu withArrow shadow="md" width={150}>
					<Menu.Target>
						<Indicator color="lime" size={8} processing>
							<Avatar
								radius="xl"
								src={
									'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png'
								}
							/>
						</Indicator>
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

						<div className="mt-2">
							<DownLoadCVButton />
						</div>
					</Menu.Dropdown>
				</Menu>
			</div>
		)
	}

	return (
		<div className="segment-container">
			<span />
			<div className="segment-content">
				<Indicator color="lime" size={8} processing>
					<Avatar
						radius="xl"
						src={'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png'}
					/>
				</Indicator>
				<SegmentedControl
					classNames={{ root: '!bg-transparent' }}
					withItemsBorders={false}
					radius="xl"
					value={navData.value}
					data={navData.data}
				/>
			</div>

			<div className="w-[130px]">
				<DownLoadCVButton />
			</div>
		</div>
	)
}

export default memo(SegmentNav)
