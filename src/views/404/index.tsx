import { Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

function NotFound() {
	const navigate = useNavigate()
	return (
		<div className="h-screen w-screen bg-gray-100 flex items-center">
			<div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
				<div className="flex flex-col gap-3 max-w-md">
					<div className="text-5xl font-dark font-bold">404</div>
					<p className="text-2xl md:text-3xl font-light leading-normal">Sorry we couldn't find this page. </p>

					<Button w={200} onClick={() => navigate('/')}>
						back to homepage
					</Button>
				</div>
				<div className="max-w-lg">
					<img src="/assets/images/commons/not-found.svg" alt="not-found" />
				</div>
			</div>
		</div>
	)
}

export default NotFound
