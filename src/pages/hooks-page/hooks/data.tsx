import {
	RiArrowGoBackLine,
	RiBrainFill,
	RiBrainLine,
	RiCodeSSlashLine,
	RiContrastDropLine,
	RiCustomerService2Line,
	RiLoopLeftLine,
} from '@remixicon/react'
import MemoPageView from '../../../views/hooks-pages/memo'
import UseCallbackPageView from '../../../views/hooks-pages/useCallback'
import UseContextPageView from '../../../views/hooks-pages/useContext'
import UseEffectPageView from '../../../views/hooks-pages/useEffect'
import UseLayoutEffectPageView from '../../../views/hooks-pages/useLayoutEffect'
import UseMemoPageView from '../../../views/hooks-pages/useMemo'
import UseReducerPageView from '../../../views/hooks-pages/useReducer'
import UseRefPageView from '../../../views/hooks-pages/useRef'
import UseStatePageView from '../../../views/hooks-pages/useState'
import UseImperativeHandlePageView from '../../../views/hooks-pages/useImperativeHandle'

function useTabData() {
	const size = 16
	const color = '#788AEB'

	const data = [
		{
			tab_value: 'useState',
			tab_inner_text: 'UseState',
			panel: <UseStatePageView />,
			icon: <RiContrastDropLine size={size} color={color} />,
		},
		{
			tab_value: 'useEffect',
			tab_inner_text: 'UseEffect',
			panel: <UseEffectPageView />,
			icon: <RiLoopLeftLine size={size} color={color} />,
		},
		{
			tab_value: 'useLayoutEffect',
			tab_inner_text: 'UseLayoutEffect',
			panel: <UseLayoutEffectPageView />,
			icon: <RiLoopLeftLine size={size} color={color} />,
		},
		{
			tab_value: 'useRef',
			tab_inner_text: 'UseRef',
			panel: <UseRefPageView />,
			icon: <RiCodeSSlashLine size={size} color={color} />,
		},
		{
			tab_value: 'memo',
			tab_inner_text: 'Memo',
			panel: <MemoPageView />,
			icon: <RiBrainLine size={size} color={color} />,
		},
		{
			tab_value: 'useCallback',
			tab_inner_text: 'UseCallback',
			panel: <UseCallbackPageView />,
			icon: <RiArrowGoBackLine size={size} color={color} />,
		},
		{
			tab_value: 'useMemo',
			tab_inner_text: 'UseMemo',
			panel: <UseMemoPageView />,
			icon: <RiBrainFill size={size} color={color} />,
		},
		{
			tab_value: 'useReducer',
			tab_inner_text: 'UseReducer',
			panel: <UseReducerPageView />,
			icon: <RiContrastDropLine size={size} color={color} />,
		},
		{
			tab_value: 'useContext',
			tab_inner_text: 'UseContext',
			panel: <UseContextPageView />,
			icon: <RiCustomerService2Line size={size} color={color} />,
		},
		{
			tab_value: 'useImperativeHandle',
			tab_inner_text: 'UseImperativeHandle',
			panel: <UseImperativeHandlePageView />,
			icon: <RiCustomerService2Line size={size} color={color} />,
		},
	]

	return { data }
}

export default useTabData
