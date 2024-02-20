import { createBrowserRouter } from 'react-router-dom'
import App from '../../../App'
import HooksPage from '../../../pages/main-page'
import NotFound from '../../../views/404'
import { AppConfig } from '../../../app-config'

function useAppRouters() {
	const routerObject = createBrowserRouter([
		{
			path: AppConfig.router.root.path,
			element: <App />,
			children: [
				{
					path: '',
					element: <div>app body</div>,
				},
				{
					path: AppConfig.router.hooks.path,
					element: <HooksPage />,
				},
			],
		},
		{
			path: '*',
			element: <NotFound />,
		},
		{
			path: AppConfig.router.notFound.path,
			element: <NotFound />,
		},
	])

	return routerObject
}

export default useAppRouters
