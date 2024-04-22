import { MantineColorsTuple, createTheme } from '@mantine/core'
import React, { createContext, useContext, useMemo, useState } from 'react'
import { limeTheme } from '../themes'

const initTheme = createTheme({
	primaryColor: 'color',
	colors: {
		color: limeTheme,
	},
})

const ThemeContext = createContext<any>({ theme: initTheme, handleSetTheme: null })

interface IThemeProvider {
	children: React.ReactNode
}

const useThemeContext = () => {
	return useContext(ThemeContext)
}

function ThemeProvider({ children }: Readonly<IThemeProvider>) {
	const [theme, setTheme] = useState(initTheme)

	const handleSetTheme = (theme: MantineColorsTuple) => {
		setTheme((prev) => {
			return {
				...prev,
				colors: {
					color: theme,
				},
			}
		})
	}

	const value = useMemo(() => ({ theme, handleSetTheme }), [theme])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeProvider, useThemeContext }
