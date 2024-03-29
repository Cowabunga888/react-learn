import { AppConfig } from '../../../app-config'

function useNavData() {
	return [
		{
			path: AppConfig.router.root.path,
			// icon: <RiAncientGateFill />,
			// innerText: AppConfig.router.root.innerText,
			icon: '',
			innerText: 'Nav_01',
		},
		{
			path: AppConfig.router.root.path,
			icon: '',
			innerText: 'Nav_02',
		},
		{
			path: AppConfig.router.root.path,
			icon: '',
			innerText: 'Nav_03',
		},
	]
}

export default useNavData
