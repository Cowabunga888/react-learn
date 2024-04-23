import { createBrowserRouter } from 'react-router-dom'
import App from 'src/App'
import { AppConfig } from 'src/app-config'
import NotFoundPage from 'src/pages/404'
import AboutPage from 'src/pages/about'
import GeneralPage from 'src/pages/general-page'
import ReactLearnPage from 'src/pages/react-learn-page'
import HooksPage from 'src/pages/react-learn-page/pages/hooks-page'
import LibraryPage from 'src/pages/react-learn-page/pages/library-page'
import ReactQueryPage from 'src/pages/react-learn-page/pages/library-page/pages/react-query-page'
import BasicApiFetchingPage from 'src/pages/react-learn-page/pages/library-page/pages/react-query-page/pages/basic-api-fetching'
import ReactQueryApiFetchingPage from 'src/pages/react-learn-page/pages/library-page/pages/react-query-page/pages/react-query-fetching'
import ReduxPage from 'src/pages/react-learn-page/pages/library-page/pages/redux-page'
import TanstackTablePage from 'src/pages/react-learn-page/pages/library-page/pages/tanstack-table-page'
import BasicTanstackTable from 'src/pages/react-learn-page/pages/library-page/pages/tanstack-table-page/pages/basic-table'
import MemoPageView from 'src/views/react-learn-pages/pages/hooks-pages/memo'
import UseCallbackPageView from 'src/views/react-learn-pages/pages/hooks-pages/useCallback'
import UseContextPageView from 'src/views/react-learn-pages/pages/hooks-pages/useContext'
import UseEffectPageView from 'src/views/react-learn-pages/pages/hooks-pages/useEffect'
import UseImperativeHandlePageView from 'src/views/react-learn-pages/pages/hooks-pages/useImperativeHandle'
import UseLayoutEffectPageView from 'src/views/react-learn-pages/pages/hooks-pages/useLayoutEffect'
import UseMemoPageView from 'src/views/react-learn-pages/pages/hooks-pages/useMemo'
import UseReducerPageView from 'src/views/react-learn-pages/pages/hooks-pages/useReducer'
import UseRefPageView from 'src/views/react-learn-pages/pages/hooks-pages/useRef'
import UseStatePageView from 'src/views/react-learn-pages/pages/hooks-pages/useState'
import ReduxBasicUsage from 'src/views/react-learn-pages/pages/library-pages/pages/redux-pages/basic-usage'
import ReduxGeneralPage from 'src/views/react-learn-pages/pages/library-pages/pages/redux-pages/general'

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
				{
					path: AppConfig.router.about.path,
					element: <AboutPage />,
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
