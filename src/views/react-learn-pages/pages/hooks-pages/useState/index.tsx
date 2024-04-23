import { Button } from '@mantine/core'
import { RiAddLine, RiSubtractLine } from '@remixicon/react'
import { useState } from 'react'
import AppBlockQuote from 'src/components/block-quotes'

function UseStatePageView() {
	const [counter, setCounter] = useState<number>(1)

	// hoặc có thể dùng callback để truyền vào để làm innitialState
	// giá trị của state là gái trị mà call back Return về
	// const [counter_01, setCounter_01] = useState<number>(() => 1)

	const handleClickIncrease = () => {
		setCounter(counter + 1)
		// or
		// setCounter(prevState => prevState + 1)
	}
	const handleClickDecrease = () => {
		setCounter(counter - 1)
		// or
		// setCounter(prevState => prevState - 1)
	}

	return (
		<div className="">
			<div className="flex items-center justify-center gap-2">
				<Button onClick={handleClickDecrease} radius="xs" size="xs" variant="filled">
					<RiSubtractLine />
				</Button>

				<h2 className="text-lg font-semibold">{counter}</h2>
				<Button onClick={handleClickIncrease} radius="xs" size="xs" variant="filled">
					<RiAddLine />
				</Button>
			</div>

			<AppBlockQuote>
				<p># Component được re-render sau khi setState</p>
				<p># Innitial state chỉ dùng cho lần đầu</p>
				<p># SetState là thay thế state bằng giá trị mới</p>
			</AppBlockQuote>
		</div>
	)
}

export default UseStatePageView
