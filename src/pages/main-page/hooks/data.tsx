import {
	RiArrowGoBackLine,
	RiBrainFill,
	RiBrainLine,
	RiCodeSSlashLine,
	RiContrastDropLine,
	RiLoopLeftLine,
} from '@remixicon/react'
import UseStatePage from '../../hooks-pages/useState'
import UseLayoutEffectPage from '../../hooks-pages/useLayoutEffect'
import UseEffectPage from '../../hooks-pages/useEffect'
import UseRefPage from '../../hooks-pages/useRef'
import MemoPage from '../../hooks-pages/memo'
import UseCallbackPage from '../../hooks-pages/useCallback'
import UseMemoPage from '../../hooks-pages/useMemo'

function useTabData() {
	const size = 16
	const color = '#788AEB'

	const data = [
		{
			tab_value: 'useState',
			tab_inner_text: 'UseState',
			panel: <UseStatePage />,
			icon: <RiContrastDropLine size={size} color={color} />,
		},
		{
			tab_value: 'useEffect',
			tab_inner_text: 'UseEffect',
			panel: <UseEffectPage />,
			icon: <RiLoopLeftLine size={size} color={color} />,
		},
		{
			tab_value: 'useLayoutEffect',
			tab_inner_text: 'UseLayoutEffect',
			panel: <UseLayoutEffectPage />,
			icon: <RiLoopLeftLine size={size} color={color} />,
		},
		{
			tab_value: 'useRef',
			tab_inner_text: 'UseRef',
			panel: <UseRefPage />,
			icon: <RiCodeSSlashLine size={size} color={color} />,
		},
		{
			tab_value: 'memo',
			tab_inner_text: 'Memo',
			panel: <MemoPage />,
			icon: <RiBrainLine size={size} color={color} />,
		},
		{
			tab_value: 'useCallback',
			tab_inner_text: 'UseCallback',
			panel: <UseCallbackPage />,
			icon: <RiArrowGoBackLine size={size} color={color} />,
		},
		{
			tab_value: 'useMemo',
			tab_inner_text: 'UseMemo',
			panel: <UseMemoPage />,
			icon: <RiBrainFill size={size} color={color} />,
		},
	]

	return { data }
}

export default useTabData
