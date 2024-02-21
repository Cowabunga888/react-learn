import { RiHomeFill, RiReactjsFill, RiReactjsLine } from '@remixicon/react'
import { AppConfig } from '../../../app-config'

function useNavData() {
	return [
		{
			path: AppConfig.router.root.path,
			icon: <RiHomeFill />,
			innerText: AppConfig.router.root.innerText,
		},
		{
			path: AppConfig.router.hooks.path,
			icon: <RiReactjsFill />,
			innerText: AppConfig.router.hooks.innerText,
		},
		{
			path: AppConfig.router.redux.path,
			icon: <RiReactjsLine />,
			innerText: AppConfig.router.redux.innerText,
		},
	]
}

export default useNavData
