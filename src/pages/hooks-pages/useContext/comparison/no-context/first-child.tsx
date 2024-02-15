import SecondChild from './second-child'

interface IProps {
	theme: boolean
}

function FirstChild({ theme }: IProps) {
	return (
		<div>
			<SecondChild theme={theme} />
		</div>
	)
}

export default FirstChild
