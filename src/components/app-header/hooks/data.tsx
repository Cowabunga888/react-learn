import {
	RiAncientGateFill,
	RiDatabase2Line,
	RiHomeFill,
	RiReactjsFill,
	RiReactjsLine,
	RiTableLine,
} from '@remixicon/react'
import { AppConfig } from '../../../app-config'

function useNavData() {
	return [
		{
			path: AppConfig.router.root.path,
			icon: <RiAncientGateFill />,
			innerText: AppConfig.router.root.innerText,
		},
		// {
		// 	path: AppConfig.router.hooks.path,
		// 	icon: <RiReactjsFill />,
		// 	innerText: AppConfig.router.hooks.innerText,
		// },
		// {
		// 	path: AppConfig.router.redux.path,
		// 	icon: <RiReactjsLine />,
		// 	innerText: AppConfig.router.redux.innerText,
		// },
		// {
		// 	path: AppConfig.router.reactQuery.path,
		// 	icon: <RiDatabase2Line />,
		// 	innerText: AppConfig.router.reactQuery.innerText,
		// },
		// {
		// 	path: AppConfig.router.tanstackTable.path,
		// 	icon: <RiTableLine />,
		// 	innerText: AppConfig.router.tanstackTable.innerText,
		// },
	]
}

export default useNavData
