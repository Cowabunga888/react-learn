import { MantineColorsTuple, createTheme } from '@mantine/core'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { yellowTheme } from '../themes'

const initTheme = createTheme({
	primaryColor: 'color',
	autoContrast: true,
	luminanceThreshold: 0.3,
	colors: {
		color: yellowTheme,
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
		localStorage.setItem('theme', JSON.stringify(theme))
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

	useEffect(() => {
		if (localStorage.getItem('theme')) {
			handleSetTheme(JSON.parse(localStorage.getItem('theme') as string))
		}
	}, [])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeProvider, useThemeContext }
