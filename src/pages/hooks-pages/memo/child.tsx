import React, { memo, useEffect, useRef } from 'react'

interface IChildComponent {
	count1?: number
}

const ChildComponent: React.FC<IChildComponent> = ({ count1 }) => {
	const a = Math.random()

	return (
		<div className="mt-3 p-2 border border-red-400 border-dashed">
			<div>Child render: {a}</div>
			<div>Parent count 1: {count1}</div>
		</div>
	)
}

export default memo(ChildComponent)
// export default ChildComponent
