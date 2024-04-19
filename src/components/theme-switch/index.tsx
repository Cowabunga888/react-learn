import { ColorSwatch, Menu, ThemeIcon } from '@mantine/core'
import { RiColorFilterLine } from '@remixicon/react'
import { useThemeContext } from '../providers/mantine-provider/theme-provider'
import { limeTheme, redTheme, tomatoTheme, yellowTheme } from '../providers/mantine-provider/themes'

function ThemeSwitch() {
	const { handleSetTheme } = useThemeContext()

	return (
		<Menu shadow="md" width={200}>
			<Menu.Target>
				<ThemeIcon radius="xl" variant="light">
					<RiColorFilterLine size={17} />
				</ThemeIcon>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Item
					onClick={() => handleSetTheme(limeTheme)}
					leftSection={<ColorSwatch color={`${limeTheme[5]}`} size={20} />}
				>
					Lime
				</Menu.Item>
				<Menu.Item
					onClick={() => handleSetTheme(yellowTheme)}
					leftSection={<ColorSwatch color={`${yellowTheme[5]}`} size={20} />}
				>
					Yellow
				</Menu.Item>
				<Menu.Item
					onClick={() => handleSetTheme(tomatoTheme)}
					leftSection={<ColorSwatch color={`${tomatoTheme[5]}`} size={20} />}
				>
					Tomato
				</Menu.Item>
				<Menu.Item
					onClick={() => handleSetTheme(redTheme)}
					leftSection={<ColorSwatch color={`${redTheme[5]}`} size={20} />}
				>
					Red
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}

export default ThemeSwitch
