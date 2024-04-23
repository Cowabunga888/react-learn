import { ColorSwatch, Menu, ThemeIcon } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { RiPaletteLine } from '@remixicon/react'
import { useThemeContext } from '../providers/mantine-provider/theme-provider'
import {
	blueTheme,
	defaultTheme,
	limeTheme,
	redTheme,
	tomatoTheme,
	violetTheme,
	yellowTheme,
} from '../providers/mantine-provider/themes'

function ThemeSwitch() {
	const { handleSetTheme } = useThemeContext()

	const themes = [
		{ label: 'Default', scheme: defaultTheme },
		{ label: 'Blue', scheme: blueTheme },
		{ label: 'Lime', scheme: limeTheme },
		{ label: 'Yellow', scheme: yellowTheme },
		{ label: 'Tomato', scheme: tomatoTheme },
		{ label: 'Red', scheme: redTheme },
		{ label: 'Violet', scheme: violetTheme },
	]

	return (
		<Menu withArrow shadow="md" width={150}>
			<Menu.Target>
				<ThemeIcon radius="xl" variant="light">
					<RiPaletteLine size={17} />
				</ThemeIcon>
			</Menu.Target>

			<Menu.Dropdown>
				{themes.map((theme) => {
					return (
						<Menu.Item
							key={randomId()}
							onClick={() => handleSetTheme(theme.scheme)}
							classNames={{ itemLabel: 'text-xs' }}
							leftSection={<ColorSwatch color={`${theme.scheme[5]}`} size={15} />}
						>
							{theme.label}
						</Menu.Item>
					)
				})}
			</Menu.Dropdown>
		</Menu>
	)
}

export default ThemeSwitch
