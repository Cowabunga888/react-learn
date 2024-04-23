export default Object.freeze({
	router: {
		root: {
			path: '',
			innerText: 'Home',
		},
		about: {
			path: 'about-me',
			innerText: 'Home',
		},
		reactLearn: {
			path: 'react-learn',
			innerText: 'Learning ReactJS',
			children: {
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
				library: {
					path: 'library',
					innerText: 'Library',
					children: {
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
						tanstackTable: {
							path: 'tanstack-table',
							innerText: 'Tanstack Table',
							children: {
								basic: {
									path: 'basic',
									innerText: 'Basic Table',
								},
							},
						},
					},
				},
			},
		},
		notFound: {
			path: 'not-found',
			innerText: 'Not-found',
		},
	},
})
