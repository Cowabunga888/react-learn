import React from 'react'
import { RiBookMarkedLine, RiReactjsLine } from '@remixicon/react'
import { AppConfig } from 'src/app-config'

function useReactLearnSidebarMap() {
	return [
		{
			title: 'Hooks',
			path: AppConfig.router.reactLearn.children.hooks.path,
			icon: <RiReactjsLine size={14} color="var(--mantine-color-color-filled)" />,
			items: [
				{
					innerText: AppConfig.router.reactLearn.children.hooks.children.useState.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.hooks.path}/${AppConfig.router.reactLearn.children.hooks.children.useState.path}`,
				},
				{
					innerText: AppConfig.router.reactLearn.children.hooks.children.useEffect.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.hooks.path}/${AppConfig.router.reactLearn.children.hooks.children.useEffect.path}`,
				},
				{
					innerText: AppConfig.router.reactLearn.children.hooks.children.useLayoutEffect.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.hooks.path}/${AppConfig.router.reactLearn.children.hooks.children.useLayoutEffect.path}`,
				},
				{
					innerText: AppConfig.router.reactLearn.children.hooks.children.useRef.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.hooks.path}/${AppConfig.router.reactLearn.children.hooks.children.useRef.path}`,
				},
				{
					innerText: AppConfig.router.reactLearn.children.hooks.children.Memo.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.hooks.path}/${AppConfig.router.reactLearn.children.hooks.children.Memo.path}`,
				},
				{
					innerText: AppConfig.router.reactLearn.children.hooks.children.useCallBack.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.hooks.path}/${AppConfig.router.reactLearn.children.hooks.children.useCallBack.path}`,
				},
				{
					innerText: AppConfig.router.reactLearn.children.hooks.children.useMemo.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.hooks.path}/${AppConfig.router.reactLearn.children.hooks.children.useMemo.path}`,
				},
				{
					innerText: AppConfig.router.reactLearn.children.hooks.children.useReducer.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.hooks.path}/${AppConfig.router.reactLearn.children.hooks.children.useReducer.path}`,
				},
				{
					innerText: AppConfig.router.reactLearn.children.hooks.children.useContext.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.hooks.path}/${AppConfig.router.reactLearn.children.hooks.children.useContext.path}`,
				},
				{
					innerText: AppConfig.router.reactLearn.children.hooks.children.useImperativeHandle.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.hooks.path}/${AppConfig.router.reactLearn.children.hooks.children.useImperativeHandle.path}`,
				},
			],
		},
		{
			title: 'Library',
			path: '',
			icon: <RiBookMarkedLine size={14} color="var(--mantine-color-color-filled)" />,
			items: [
				{
					disable: false,
					innerText: AppConfig.router.reactLearn.children.library.children.redux.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.library.path}/${AppConfig.router.reactLearn.children.library.children.redux.path}`,
				},
				{
					disable: true,
					innerText: AppConfig.router.reactLearn.children.library.children.reactQuery.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.library.path}/${AppConfig.router.reactLearn.children.library.children.reactQuery.path}`,
				},
				{
					disable: true,
					innerText: AppConfig.router.reactLearn.children.library.children.tanstackTable.innerText,
					path: `/${AppConfig.router.reactLearn.path}/${AppConfig.router.reactLearn.children.library.path}/${AppConfig.router.reactLearn.children.library.children.tanstackTable.path}`,
				},
			],
		},
	]
}

export default useReactLearnSidebarMap
