import { Button } from '@mantine/core'
import React, { memo } from 'react'

interface IChildComponent {
	onIncrease?: () => void
}

const ChildComponent: React.FC<IChildComponent> = ({ onIncrease }) => {
	const a = Math.random()

	return (
		<div className="mt-3 p-2 border border-red-400 border-dashed">
			<div>Child render: {a}</div>
			<Button onClick={onIncrease} radius="xs" size="xs" variant="filled">
				setCount 1
			</Button>
		</div>
	)
}

export default memo(ChildComponent)
