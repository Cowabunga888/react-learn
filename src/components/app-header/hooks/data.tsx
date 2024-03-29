import { RiAncientGateFill } from '@remixicon/react'
import { AppConfig } from '../../../app-config'

function useNavData() {
	return [
		{
			path: AppConfig.router.root.path,
			icon: <RiAncientGateFill />,
			innerText: AppConfig.router.root.innerText,
		},
	]
}

export default useNavData
