import { RiAncientGateFill } from '@remixicon/react'
import { AppConfig } from '../../../app-config'

function useNavData() {
	return [
		{
			path: AppConfig.router.root.path,
			icon: <RiAncientGateFill />,
			innerText: 'Home',
		},
		{
			path: AppConfig.router.about.path,
			icon: '',
			innerText: 'About me',
		},
		{
			path: AppConfig.router.reactLearn.path,
			icon: '',
			innerText: 'React Learn',
		},
		{
			path: AppConfig.router.notFound.path,
			icon: '',
			innerText: '404',
		},
	]
}

export default useNavData
