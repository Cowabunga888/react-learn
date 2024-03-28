import { Switch } from '@mantine/core'
import { RiMoonLine, RiSunLine } from '@remixicon/react'
import { createContext, useState } from 'react'
import FirstChild from './first-child'

// 1. create context
// 2. provider
// 3. consumer

const ThemeContext = createContext(true)

function WithContext() {
	const [theme, setTheme] = useState<boolean>(true)

	return (
		<ThemeContext.Provider value={theme}>
			<Switch
				onChange={(e) => setTheme(e.currentTarget.checked)}
				onLabel={<RiSunLine size={15} />}
				offLabel={<RiMoonLine size={15} />}
				defaultChecked
			/>
			<FirstChild />
		</ThemeContext.Provider>
	)
}

export { WithContext, ThemeContext }
