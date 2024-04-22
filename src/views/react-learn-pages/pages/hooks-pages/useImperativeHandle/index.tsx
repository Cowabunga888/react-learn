import { Button } from '@mantine/core'
import { useRef } from 'react'
import VideoComponent from './VideoComponent'
import AppBlockQuote from '../../../../../components/block-quotes'

function UseImperativeHandlePageView() {
	const videoRef = useRef<HTMLVideoElement>(null)

	return (
		<>
			<VideoComponent ref={videoRef} />
			<div className="flex gap-3 mt-2">
				<Button onClick={() => videoRef.current?.play()} radius="xs" size="xs" variant="filled">
					Play
				</Button>
				<Button onClick={() => videoRef.current?.pause()} radius="xs" size="xs" variant="filled">
					Pause
				</Button>
			</div>
			<AppBlockQuote>
				<p className="text-red-400">## useImperativeHandle</p>
				<p>Giúp tùy chỉnh ref của Function Component</p>
				<p>Function component không có atribute Ref</p>
				<p>Nên useImperativeHandle sẽ giúp tạo 1 biến -tương tự ref- để handle Function Component</p>
			</AppBlockQuote>
			<AppBlockQuote>
				<p className="text-red-400">## forwardRef</p>
				<p>Là một HOC -Higher order component-</p>
				<p>
					Cho phép truyền và tác động vào ref của DOM Element thông qua "ref" của component chứa DOM Element
					đó
				</p>
			</AppBlockQuote>
		</>
	)
}

export default UseImperativeHandlePageView
