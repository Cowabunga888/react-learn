import { MantineColorsTuple, MantineProvider, createTheme } from '@mantine/core'
import React from 'react'

interface Props {
	children: React.ReactNode
}

const myColor: MantineColorsTuple = [
	'#effee7',
	'#e0f8d4',
	'#c2efab',
	'#a2e67e',
	'#87de57',
	'#75d940',
	'#6bd731',
	'#59be23',
	'#4da91b',
	'#3d920c',
]

const theme = createTheme({
	primaryColor: 'my-color',
	colors: {
		'my-color': myColor,
	},
})

function AppMantineProvider({ children }: Readonly<Props>) {
	return <MantineProvider theme={theme}>{children}</MantineProvider>
}

export default AppMantineProvider
