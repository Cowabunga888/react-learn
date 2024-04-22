import React from 'react'
import { AppConfig } from '../../../app-config'
import { RiBookMarkedLine, RiReactjsLine } from '@remixicon/react'

function useSidebarMap() {
	return [
		{
			title: 'Hooks',
			path: AppConfig.router.hooks.path,
			icon: <RiReactjsLine size={14} color="var(--mantine-color-color-filled)" />,
			items: [
				{
					innerText: AppConfig.router.hooks.children.useState.innerText,
					path: `/${AppConfig.router.hooks.path}/${AppConfig.router.hooks.children.useState.path}`,
				},
				{
					innerText: AppConfig.router.hooks.children.useEffect.innerText,
					path: `/${AppConfig.router.hooks.path}/${AppConfig.router.hooks.children.useEffect.path}`,
				},
				{
					innerText: AppConfig.router.hooks.children.useLayoutEffect.innerText,
					path: `/${AppConfig.router.hooks.path}/${AppConfig.router.hooks.children.useLayoutEffect.path}`,
				},
				{
					innerText: AppConfig.router.hooks.children.useRef.innerText,
					path: `/${AppConfig.router.hooks.path}/${AppConfig.router.hooks.children.useRef.path}`,
				},
				{
					innerText: AppConfig.router.hooks.children.Memo.innerText,
					path: `/${AppConfig.router.hooks.path}/${AppConfig.router.hooks.children.Memo.path}`,
				},
				{
					innerText: AppConfig.router.hooks.children.useCallBack.innerText,
					path: `/${AppConfig.router.hooks.path}/${AppConfig.router.hooks.children.useCallBack.path}`,
				},
				{
					innerText: AppConfig.router.hooks.children.useMemo.innerText,
					path: `/${AppConfig.router.hooks.path}/${AppConfig.router.hooks.children.useMemo.path}`,
				},
				{
					innerText: AppConfig.router.hooks.children.useReducer.innerText,
					path: `/${AppConfig.router.hooks.path}/${AppConfig.router.hooks.children.useReducer.path}`,
				},
				{
					innerText: AppConfig.router.hooks.children.useContext.innerText,
					path: `/${AppConfig.router.hooks.path}/${AppConfig.router.hooks.children.useContext.path}`,
				},
				{
					innerText: AppConfig.router.hooks.children.useImperativeHandle.innerText,
					path: `/${AppConfig.router.hooks.path}/${AppConfig.router.hooks.children.useImperativeHandle.path}`,
				},
			],
		},
		{
			title: 'Library',
			path: '',
			icon: <RiBookMarkedLine size={14} color="var(--mantine-color-color-filled)" />,
			items: [
				{
					innerText: AppConfig.router.redux.innerText,
					path: `/${AppConfig.router.library.path}/${AppConfig.router.redux.path}`,
				},
				{
					innerText: AppConfig.router.reactQuery.innerText,
					path: `/${AppConfig.router.library.path}/${AppConfig.router.reactQuery.path}`,
				},
				{
					innerText: AppConfig.router.tanstackTable.innerText,
					path: `/${AppConfig.router.library.path}/${AppConfig.router.tanstackTable.path}`,
				},
			],
		},
	]
}

export default useSidebarMap
