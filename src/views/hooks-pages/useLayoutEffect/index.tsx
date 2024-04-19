import { Button } from '@mantine/core'
import { RiAddLine } from '@remixicon/react'
import { useLayoutEffect, useState } from 'react'
import AppBlockQuote from '../../../components/block-quotes'

function UseLayoutEffectPageView() {
	const [count, setCount] = useState<number>(0)

	// useEffect(() => {
	useLayoutEffect(() => {
		if (count > 3) {
			setCount(0)
		}
	}, [count])

	return (
		<>
			<div className="flex items-center justify-center gap-2">
				<Button
					onClick={() => {
						setCount(count + 1)
					}}
					radius="xs"
					size="xs"
					variant="filled"
				>
					<RiAddLine />
				</Button>
				<h2 className="text-lg font-semibold">{count}</h2>
			</div>

			<AppBlockQuote>
				<p className="text-red-400">## useEffect</p>
				<p>1. Cập nhật state</p>
				<p>2. Cập nhật DOM (mutated)</p>
				<p>3. Render UI</p>
				<p>4. Gọi clean up func nếu deps thay đổi</p>
				<p>5. Gọi useEffect callback func</p>
			</AppBlockQuote>
			<AppBlockQuote>
				<p className="text-red-400">## useLayoutEffect</p>
				<p>1. Cập nhật state</p>
				<p>2. Cập nhật DOM (mutated)</p>
				<p>3. Gọi clean up func nếu deps thay đổi (sync)</p>
				<p>4. Gọi useEffect callback func (sync)</p>
				<p>5. Render UI</p>
			</AppBlockQuote>
		</>
	)
}

export default UseLayoutEffectPageView
