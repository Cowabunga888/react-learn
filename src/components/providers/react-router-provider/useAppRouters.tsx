import { createBrowserRouter } from 'react-router-dom'
import App from '../../../App'
import { AppConfig } from '../../../app-config'
import NotFoundPage from '../../../pages/404'
import HooksPage from '../../../pages/hooks-page'
import ReduxPage from '../../../pages/redux-page'
import ReduxBasicUsage from '../../../views/redux-pages/basic-usage'
import ReduxGeneralPage from '../../../views/redux-pages/general'

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
				{
					path: AppConfig.router.redux.path,
					element: <ReduxPage />,
					children: [
						{
							path: '',
							element: <ReduxGeneralPage />,
						},
						{
							path: AppConfig.router.redux.children.basic.path,
							element: <ReduxBasicUsage />,
						},
						{
							path: AppConfig.router.redux.children.advance.path,
							element: <ReduxBasicUsage />,
						},
					],
				},
			],
		},
		{
			path: '*',
			element: <NotFoundPage />,
		},
		{
			path: AppConfig.router.notFound.path,
			element: <NotFoundPage />,
		},
	])

	return routerObject
}

export default useAppRouters
