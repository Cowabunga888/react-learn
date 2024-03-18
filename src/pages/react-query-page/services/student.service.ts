import http from '../../../utils/http'
import { IGetStudentsParams, IGetStudentsPayload } from '../type'

const studentsService = {
	getStudents: async ({ page, perPage }: IGetStudentsParams) => {
		const res: IGetStudentsPayload = await http.get('/students', {
			params: { _page: page, _per_page: perPage },
		})

		if (res.status === 200) {
			return res.data
		}

		throw new Error('studentsService.getStudents')
	},
}

export { studentsService }
