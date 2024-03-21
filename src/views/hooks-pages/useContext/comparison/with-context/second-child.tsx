import { useContext } from 'react'
import { ThemeContext } from './theme-context'

function SecondChild() {
	const theme = useContext(ThemeContext)
	const contentTheme = theme
		? 'bg-white text-slate-800 mt-2 p-2 rounded-md text-sm'
		: 'bg-slate-800 text-white mt-2 p-2 rounded-md text-sm'

	return (
		<p className={contentTheme}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua. Placerat vestibulum lectus mauris ultrices eros in cursus. Urna nunc id cursus metus
			aliquam eleifend. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Viverra ipsum nunc
			aliquet bibendum enim facilisis. Venenatis urna cursus eget nunc. Vivamus arcu felis bibendum ut tristique
			et egestas quis. Leo integer malesuada nunc vel. Massa tincidunt dui ut ornare. Lectus magna fringilla urna
			porttitor rhoncus.
		</p>
	)
}

export default SecondChild
