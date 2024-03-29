import { createBrowserRouter } from 'react-router-dom'
import App from '../../../App'
import { AppConfig } from '../../../app-config'
import NotFoundPage from '../../../pages/404'
import HooksPage from '../../../pages/hooks-page'
import MemoPageView from '../../../views/hooks-pages/memo'
import UseCallbackPageView from '../../../views/hooks-pages/useCallback'
import UseContextPageView from '../../../views/hooks-pages/useContext'
import UseEffectPageView from '../../../views/hooks-pages/useEffect'
import UseImperativeHandlePageView from '../../../views/hooks-pages/useImperativeHandle'
import UseLayoutEffectPageView from '../../../views/hooks-pages/useLayoutEffect'
import UseMemoPageView from '../../../views/hooks-pages/useMemo'
import UseReducerPageView from '../../../views/hooks-pages/useReducer'
import UseRefPageView from '../../../views/hooks-pages/useRef'
import UseStatePageView from '../../../views/hooks-pages/useState'
import LibraryPage from '../../../pages/library-page'
import ReduxGeneralPage from '../../../views/library-pages/pages/redux-pages/general'
import ReduxBasicUsage from '../../../views/library-pages/pages/redux-pages/basic-usage'
import TanstackTablePage from '../../../pages/library-page/pages/tanstack-table-page'
import BasicTanstackTable from '../../../pages/library-page/pages/tanstack-table-page/pages/basic-table'
import ReduxPage from '../../../pages/library-page/pages/redux-page'
import ReactQueryPage from '../../../pages/library-page/pages/react-query-page'
import BasicApiFetchingPage from '../../../pages/library-page/pages/react-query-page/pages/basic-api-fetching'
import ReactQueryApiFetchingPage from '../../../pages/library-page/pages/react-query-page/pages/react-query-fetching'

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
					children: [
						{
							path: '',
							element: <UseStatePageView />,
						},
						{
							path: AppConfig.router.hooks.children.useState.path,
							element: <UseStatePageView />,
						},
						{
							path: AppConfig.router.hooks.children.useEffect.path,
							element: <UseEffectPageView />,
						},
						{
							path: AppConfig.router.hooks.children.useLayoutEffect.path,
							element: <UseLayoutEffectPageView />,
						},
						{
							path: AppConfig.router.hooks.children.useRef.path,
							element: <UseRefPageView />,
						},
						{
							path: AppConfig.router.hooks.children.Memo.path,
							element: <MemoPageView />,
						},
						{
							path: AppConfig.router.hooks.children.useCallBack.path,
							element: <UseCallbackPageView />,
						},
						{
							path: AppConfig.router.hooks.children.useMemo.path,
							element: <UseMemoPageView />,
						},
						{
							path: AppConfig.router.hooks.children.useReducer.path,
							element: <UseReducerPageView />,
						},
						{
							path: AppConfig.router.hooks.children.useContext.path,
							element: <UseContextPageView />,
						},
						{
							path: AppConfig.router.hooks.children.useImperativeHandle.path,
							element: <UseImperativeHandlePageView />,
						},
					],
				},
				{
					path: AppConfig.router.library.path,
					element: <LibraryPage />,
					children: [
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
						{
							path: AppConfig.router.reactQuery.path,
							element: <ReactQueryPage />,
							children: [
								{
									path: '',
									element: <BasicApiFetchingPage />,
								},
								{
									path: AppConfig.router.reactQuery.children.basic.path,
									element: <BasicApiFetchingPage />,
								},
								{
									path: AppConfig.router.reactQuery.children.queryFetching.path,
									element: <ReactQueryApiFetchingPage />,
								},
							],
						},
						{
							path: AppConfig.router.tanstackTable.path,
							element: <TanstackTablePage />,
							children: [
								{
									path: '',
									element: <BasicTanstackTable />,
								},
								{
									path: AppConfig.router.tanstackTable.children.basic.path,
									element: <BasicTanstackTable />,
								},
							],
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
