import { forwardRef, useImperativeHandle, useRef } from 'react'

function VideoComponent(props: any, ref: any) {
	const videoRef = useRef<HTMLVideoElement>(null)

	useImperativeHandle(ref, () => {
		return {
			play: () => {
				videoRef?.current?.play()
			},
			pause: () => {
				videoRef?.current?.pause()
			},
		}
	})

	return (
		<div className="w-[300px] p-2 border border-dashed border-red-400 rounded-md">
			<video src="/assets/videos/hooks/useImperativeHanlde/video_01.mp4" ref={videoRef} />
		</div>
	)
}

export default forwardRef(VideoComponent)
