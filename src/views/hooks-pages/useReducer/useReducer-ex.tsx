import { Button } from '@mantine/core'
import { RiAddLine, RiSubtractLine } from '@remixicon/react'
import React, { useReducer } from 'react'

// init state
const initState = 0

// actions
const UP_ACTION = 'UP'
const DOWN_ACTION = 'DOWN'

// reducer
const reducer = (state: number, action: string) => {
	switch (action) {
		case UP_ACTION:
			return state + 1
		case DOWN_ACTION:
			return state - 1
		default:
			return state
	}
}

function UseReducerEX() {
	const [count, dispatch] = useReducer(reducer, initState)

	return (
		<div className="flex items-center justify-center gap-2">
			<Button onClick={() => dispatch(DOWN_ACTION)} radius="xs" size="xs" variant="filled" color="lime">
				<RiSubtractLine />
			</Button>
			<h2 className="text-lg font-semibold">{count}</h2>
			<Button onClick={() => dispatch(UP_ACTION)} radius="xs" size="xs" variant="filled" color="lime">
				<RiAddLine />
			</Button>
		</div>
	)
}

export default UseReducerEX
