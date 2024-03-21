export default Object.freeze({
	router: {
		root: {
			path: '',
			innerText: 'Home',
		},
		hooks: {
			path: 'hooks',
			innerText: 'Hooks',
			children: {
				useState: {
					path: 'useState',
					innerText: 'useState',
				},
				useEffect: {
					path: 'useEffect',
					innerText: 'useEffect',
				},
				useLayoutEffect: {
					path: 'useLayoutEffect',
					innerText: 'useLayoutEffect',
				},
				useRef: {
					path: 'useRef',
					innerText: 'useRef',
				},
				Memo: {
					path: 'Memo',
					innerText: 'Memo',
				},
				useCallBack: {
					path: 'useCallBack',
					innerText: 'useCallBack',
				},
				useMemo: {
					path: 'useMemo',
					innerText: 'useMemo',
				},
				useReducer: {
					path: 'useReducer',
					innerText: 'useReducer',
				},
				useContext: {
					path: 'useContext',
					innerText: 'useContext',
				},
				useImperativeHandle: {
					path: 'useImperativeHandle',
					innerText: 'useImperativeHandle',
				},
			},
		},
		redux: {
			path: 'redux',
			innerText: 'Redux',
			children: {
				general: {
					path: '',
					innerText: 'General',
				},
				basic: {
					path: 'basic',
					innerText: 'Basic',
				},
				advance: {
					path: 'advance',
					innerText: 'Advance',
				},
			},
		},
		reactQuery: {
			path: 'react-query',
			innerText: 'React Query',
			children: {
				basic: {
					path: 'basic',
					innerText: 'Basic',
				},
				queryFetching: {
					path: 'query-fetching',
					innerText: 'queryFetching',
				},
			},
		},
		notFound: {
			path: '404',
			innerText: 'Not-found',
		},
	},
})
