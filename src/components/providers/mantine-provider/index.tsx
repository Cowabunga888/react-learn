import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import React from 'react'

interface Props {
	children: React.ReactNode
}

function AppMantineProvider({ children }: Props) {
	return <MantineProvider>{children}</MantineProvider>
}

export default AppMantineProvider
