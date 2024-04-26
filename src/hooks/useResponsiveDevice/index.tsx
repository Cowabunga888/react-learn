import { useMediaQuery } from '@mantine/hooks'

export const useDesktopMediaQuery = () => useMediaQuery('(min-width: 640px)')

export const useMobileMediaQuery = () => useMediaQuery('(max-width: 640px)')

type MediaQueryResponsiveDevice = 'desktop' | 'mobile'
export const useResponsiveDevice = (): MediaQueryResponsiveDevice => {
	const isDesktop = useDesktopMediaQuery()
	const isMobile = useMobileMediaQuery()

	if (isDesktop) return 'desktop'
	if (isMobile) return 'mobile'

	return 'desktop'
}
