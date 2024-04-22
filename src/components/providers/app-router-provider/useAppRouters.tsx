import { createBrowserRouter } from 'react-router-dom'
import App from '../../../App'
import { AppConfig } from '../../../app-config'
import NotFoundPage from '../../../pages/404'
import GeneralPage from '../../../pages/general-page'
import ReactLearnPage from '../../../pages/react-learn-page'
import UseStatePageView from '../../../views/react-learn-pages/pages/hooks-pages/useState'
import UseEffectPageView from '../../../views/react-learn-pages/pages/hooks-pages/useEffect'
import UseLayoutEffectPageView from '../../../views/react-learn-pages/pages/hooks-pages/useLayoutEffect'
import UseRefPageView from '../../../views/react-learn-pages/pages/hooks-pages/useRef'
import MemoPageView from '../../../views/react-learn-pages/pages/hooks-pages/memo'
import UseCallbackPageView from '../../../views/react-learn-pages/pages/hooks-pages/useCallback'
import UseMemoPageView from '../../../views/react-learn-pages/pages/hooks-pages/useMemo'
import UseReducerPageView from '../../../views/react-learn-pages/pages/hooks-pages/useReducer'
import UseContextPageView from '../../../views/react-learn-pages/pages/hooks-pages/useContext'
import UseImperativeHandlePageView from '../../../views/react-learn-pages/pages/hooks-pages/useImperativeHandle'
import ReduxGeneralPage from '../../../views/react-learn-pages/pages/library-pages/pages/redux-pages/general'
import ReduxBasicUsage from '../../../views/react-learn-pages/pages/library-pages/pages/redux-pages/basic-usage'
import HooksPage from '../../../pages/react-learn-page/pages/hooks-page'
import LibraryPage from '../../../pages/react-learn-page/pages/library-page'
import ReduxPage from '../../../pages/react-learn-page/pages/library-page/pages/redux-page'
import ReactQueryPage from '../../../pages/react-learn-page/pages/library-page/pages/react-query-page'
import BasicApiFetchingPage from '../../../pages/react-learn-page/pages/library-page/pages/react-query-page/pages/basic-api-fetching'
import ReactQueryApiFetchingPage from '../../../pages/react-learn-page/pages/library-page/pages/react-query-page/pages/react-query-fetching'
import TanstackTablePage from '../../../pages/react-learn-page/pages/library-page/pages/tanstack-table-page'
import BasicTanstackTable from '../../../pages/react-learn-page/pages/library-page/pages/tanstack-table-page/pages/basic-table'

function useAppRouters() {
	const routerObject = createBrowserRouter([
		{
			path: AppConfig.router.root.path,
			element: <App />,
			children: [
				{
					path: '',
					element: <GeneralPage />,
				},
				{
					path: AppConfig.router.reactLearn.path,
					element: <ReactLearnPage />,
					children: [
						{
							path: AppConfig.router.reactLearn.children.hooks.path,
							element: <HooksPage />,
							children: [
								{
									path: '',
									element: <UseStatePageView />,
								},
								{
									path: AppConfig.router.reactLearn.children.hooks.children.useState.path,
									element: <UseStatePageView />,
								},
								{
									path: AppConfig.router.reactLearn.children.hooks.children.useEffect.path,
									element: <UseEffectPageView />,
								},
								{
									path: AppConfig.router.reactLearn.children.hooks.children.useLayoutEffect.path,
									element: <UseLayoutEffectPageView />,
								},
								{
									path: AppConfig.router.reactLearn.children.hooks.children.useRef.path,
									element: <UseRefPageView />,
								},
								{
									path: AppConfig.router.reactLearn.children.hooks.children.Memo.path,
									element: <MemoPageView />,
								},
								{
									path: AppConfig.router.reactLearn.children.hooks.children.useCallBack.path,
									element: <UseCallbackPageView />,
								},
								{
									path: AppConfig.router.reactLearn.children.hooks.children.useMemo.path,
									element: <UseMemoPageView />,
								},
								{
									path: AppConfig.router.reactLearn.children.hooks.children.useReducer.path,
									element: <UseReducerPageView />,
								},
								{
									path: AppConfig.router.reactLearn.children.hooks.children.useContext.path,
									element: <UseContextPageView />,
								},
								{
									path: AppConfig.router.reactLearn.children.hooks.children.useImperativeHandle.path,
									element: <UseImperativeHandlePageView />,
								},
							],
						},
						{
							path: AppConfig.router.reactLearn.children.library.path,
							element: <LibraryPage />,
							children: [
								{
									path: AppConfig.router.reactLearn.children.library.children.redux.path,
									element: <ReduxPage />,
									children: [
										{
											path: '',
											element: <ReduxGeneralPage />,
										},
										{
											path: AppConfig.router.reactLearn.children.library.children.redux.children
												.basic.path,
											element: <ReduxBasicUsage />,
										},
										{
											path: AppConfig.router.reactLearn.children.library.children.redux.children
												.advance.path,
											element: <ReduxBasicUsage />,
										},
									],
								},
								{
									path: AppConfig.router.reactLearn.children.library.children.reactQuery.path,
									element: <ReactQueryPage />,
									children: [
										{
											path: '',
											element: <BasicApiFetchingPage />,
										},
										{
											path: AppConfig.router.reactLearn.children.library.children.reactQuery
												.children.basic.path,
											element: <BasicApiFetchingPage />,
										},
										{
											path: AppConfig.router.reactLearn.children.library.children.reactQuery
												.children.queryFetching.path,
											element: <ReactQueryApiFetchingPage />,
										},
									],
								},
								{
									path: AppConfig.router.reactLearn.children.library.children.tanstackTable.path,
									element: <TanstackTablePage />,
									children: [
										{
											path: '',
											element: <BasicTanstackTable />,
										},
										{
											path: AppConfig.router.reactLearn.children.library.children.tanstackTable
												.children.basic.path,
											element: <BasicTanstackTable />,
										},
									],
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
