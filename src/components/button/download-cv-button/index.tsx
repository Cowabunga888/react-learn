import { Button } from '@mantine/core'
import { RiDownloadCloud2Line } from '@remixicon/react'
import confetti from 'canvas-confetti'
import { useState } from 'react'
import toast from 'react-hot-toast'

function DownLoadCVButton() {
	const [loading, setLoading] = useState(false)

	const explodeConfetti = () => {
		const duration = 3 * 1000
		const animationEnd = Date.now() + duration
		const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

		function randomInRange(min: number, max: number) {
			return Math.random() * (max - min) + min
		}

		const interval: any = setInterval(function () {
			const timeLeft = animationEnd - Date.now()

			if (timeLeft <= 0) {
				return clearInterval(interval)
			}

			const particleCount = 50 * (timeLeft / duration)
			// since particles fall down, start a bit higher than random
			confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
			confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
		}, 250)
	}

	const handleloading = () => {
		setLoading(true)
		explodeConfetti()
		setTimeout(() => {
			setLoading(false)
			toast.success('Thanks for downloading ☕')
		}, 3000)
	}
	return (
		<a href="/assets/files/pdf/[Junior-Frontend]_[BuiMinhHieu].pdf" download>
			<Button
				onClick={handleloading}
				fullWidth
				variant="filled"
				size="xs"
				radius="xl"
				rightSection={<RiDownloadCloud2Line size={16} />}
				loading={loading}
			>
				Download CV
			</Button>
		</a>
	)
}

export default DownLoadCVButton
