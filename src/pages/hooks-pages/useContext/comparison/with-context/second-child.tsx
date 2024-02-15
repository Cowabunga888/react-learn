import { useContext } from 'react'
import { ThemeContext } from './theme-context'

function SecondChild() {
	const theme = useContext(ThemeContext)
	const contentTheme = theme
		? 'bg-white text-slate-800 mt-2 p-2 rounded-md'
		: 'bg-slate-800 text-white mt-2 p-2 rounded-md'

	return (
		<p className={contentTheme}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua. Placerat vestibulum lectus mauris ultrices eros in cursus. Urna nunc id cursus metus
			aliquam eleifend. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Viverra ipsum nunc
			aliquet bibendum enim facilisis. Venenatis urna cursus eget nunc. Vivamus arcu felis bibendum ut tristique
			et egestas quis. Leo integer malesuada nunc vel. Massa tincidunt dui ut ornare. Lectus magna fringilla urna
			porttitor rhoncus. Est lorem ipsum dolor sit amet consectetur adipiscing. Cursus mattis molestie a iaculis
			at erat pellentesque adipiscing. Aenean et tortor at risus. Scelerisque mauris pellentesque pulvinar
			pellentesque habitant. Erat nam at lectus urna duis convallis convallis tellus id. In ornare quam viverra
			orci sagittis eu volutpat odio facilisis. Amet est placerat in egestas erat imperdiet sed. Elementum eu
			facilisis sed odio morbi quis. Viverra mauris in aliquam sem. Sed augue lacus viverra vitae congue eu
			consequat ac felis.
		</p>
	)
}

export default SecondChild
