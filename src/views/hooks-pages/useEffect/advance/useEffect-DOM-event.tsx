import { Button } from '@mantine/core'
import { RiArrowUpLine } from '@remixicon/react'
import { useEffect, useState } from 'react'

function UseEffectDOMEvent() {
	const [toggle, setToggle] = useState<boolean>(true)

	return (
		<div className="flex flex-col items-center justify-start gap-3">
			<Button
				onClick={() => {
					setToggle(!toggle)
				}}
				radius="xs"
				size="xs"
				variant="filled"
				color={toggle ? 'lime' : 'red'}
			>
				Click me!
			</Button>
			{toggle && <TextFetcher />}
		</div>
	)
}

export default UseEffectDOMEvent

const TextFetcher = () => {
	const [text, setText] = useState<string>('')
	const [showBtn, setShowBtn] = useState<boolean>(false)

	const handleFetchApi = () => {
		fetch('https://baconipsum.com/api/?type=meat-and-filler')
			.then((res) => res.json())
			.then((res) => setText(res))
	}

	const handleScroll = () => {
		// console.log('Scroll Y: ', window.scrollY)
		setShowBtn(window.scrollY >= 200)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		console.log('Mounted...')
		// Clean up function
		return () => {
			// khi lắng nghe bắt buộc phài clear đi trước khi component unmounted
			// nhằm tránh rò rĩ bộ nhớ
			// bỏ react strict mode để xem rõ hơn
			console.log('Unmounted...')
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		handleFetchApi()
	}, [])

	return (
		<div className="w-full bg-slate-300">
			<div className="w-[350px] m-auto">{text ? text : 'loading...'}</div>

			{showBtn && (
				<div className="fixed bottom-2 right-2 cursor-pointer">
					<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#333]">
						<RiArrowUpLine />
					</div>
				</div>
			)}
		</div>
	)
}
