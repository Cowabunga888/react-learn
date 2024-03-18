export default Object.freeze({
	students: {
		defaultRoute: 'students',
		getAll: (page: string | number, perPage: string | number) => `students?_page=${page}&_per_page${perPage}`,
	},
})
