import { Button } from '@mantine/core'
import { useEffect, useRef, useState } from 'react'
import AppBlockQuote from '../../../components/block-quotes'

//let timerIntervalFunc: any

function UseRefPageView() {
	const [count, setCount] = useState<number>(60)
	const timerIntervalFunc = useRef<any>()
	const prevCount = useRef<number>()
	const h2Ref = useRef<HTMLHeadingElement | null>(null)

	// nếu timerIntervalFunc nằm bên trong
	// thì khi rerender timerIntervalFunc = undefined
	// và không thể nào clear interval đấy nữa
	// let timerIntervalFunc: any
	// cách giải quyết là ta có thể mang timerIntervalFunc ra ngoài component dòng 5
	// hoặc dùng useRef
	// useRef giúp tạo ra 1 biến global cho component mà không cần mang biến đấy ra ngoài component
	// sau mỗi lần rereder biến uesRef không thay đổi hay reSet lại giá trị ban đầu ->
	// -> như useState trừ khi set lại ref.current = giá trị mới

	const handleStart = () => {
		// setInterval sẽ auto generate 1 id bất kỳ
		// khi cần stop interval thì chỉ cần clear id interval đó là được
		timerIntervalFunc.current = setInterval(() => {
			setCount((prev) => prev - 1)
		}, 1000)
	}
	const handleStop = () => {
		clearInterval(timerIntervalFunc.current)
	}

	useEffect(() => {
		prevCount.current = count

		console.log(h2Ref.current) // tương đường với document.querySelector
		console.log(h2Ref.current?.getBoundingClientRect()) // tương đường với document.querySelector
	}, [count])

	console.log('prev', prevCount.current)
	console.log('current', count)

	return (
		<>
			<div className="flex items-center justify-center gap-2">
				<Button onClick={handleStart} radius="xs" size="xs" variant="filled">
					Start
				</Button>

				<h2 ref={h2Ref} className="text-lg font-semibold">
					{count}
				</h2>

				<Button onClick={handleStop} radius="xs" size="xs" variant="filled" color="red">
					Stop
				</Button>
			</div>

			<AppBlockQuote>
				<p className="text-red-400">## useRef</p>
				<p>1. useRef giúp tạo ra 1 biến global cho component mà không cần mang biến đấy ra ngoài component</p>
				<p>2. sau mỗi lần rereder biến uesRef không thay đổi hay reSet lại giá trị ban đầu</p>
				<p>như useState trừ khi set lại ref.current = giá trị mới</p>
				<p>
					3. ngoài ra cũng có thể dùng useRef để lưu giá trị trước đó của 1 state sau khi component rerender
				</p>
				<p>4. ngoài ra cũng có thể dùng useRef để lưu DOM element</p>
			</AppBlockQuote>
		</>
	)
}

export default UseRefPageView
