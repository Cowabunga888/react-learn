import { Switch } from '@mantine/core'
import { RiMoonLine, RiSunLine } from '@remixicon/react'
import { useState } from 'react'
import FirstChild from './first-child'

function NoContext() {
	const [theme, setTheme] = useState<boolean>(true)

	return (
		<div>
			<Switch
				onChange={(e) => setTheme(e.currentTarget.checked)}
				onLabel={<RiSunLine size={15} />}
				offLabel={<RiMoonLine size={15} />}
				color="lime"
				defaultChecked
			/>
			<FirstChild theme={theme} />
		</div>
	)
}

export default NoContext
