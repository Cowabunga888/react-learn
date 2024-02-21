export default Object.freeze({
	router: {
		root: {
			path: '',
			innerText: 'Home',
		},
		hooks: {
			path: 'hooks',
			innerText: 'Hooks',
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
		notFound: {
			path: '404',
			innerText: 'Not-found',
		},
	},
})
