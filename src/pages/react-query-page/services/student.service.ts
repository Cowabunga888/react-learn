import http from '../../../utils/http'
import {
	IAddNewStudentTableParams,
	IAddStudentTablePayload,
	IDeleteStudentTableParams,
	IDeleteStudentTablePayload,
	IGetStudentsTableParams,
	IGetStudentsTablePayload,
	IUpdateStudentTableParams,
	IUpdateStudentTablePayload,
} from '../type'

const studentsService = {
	getStudents: async ({ page, perPage }: IGetStudentsTableParams) => {
		const res: IGetStudentsTablePayload = await http.get('/students', {
			params: { _page: page, _per_page: perPage },
		})

		if (res.status === 200) {
			return res.data
		}

		throw new Error('studentsService.getStudents')
	},
	addStudent: async (student: IAddNewStudentTableParams) => {
		const res: IAddStudentTablePayload = await http.post('/students', student)

		if (res.status === 200 || res.status === 201) {
			return res.data
		}

		throw new Error('studentsService.addStudent')
	},
	updateStudent: async (student: IUpdateStudentTableParams) => {
		const res: IUpdateStudentTablePayload = await http.put(`/students/${student.id}`, student)

		if (res.status === 200 || res.status === 201) {
			return res.data
		}

		throw new Error('studentsService.updateStudent')
	},
	deleteStudent: async ({ id }: IDeleteStudentTableParams) => {
		const res: IDeleteStudentTablePayload = await http.delete(`/students/${id}`)

		if (res.status === 200 || res.status === 201) {
			return res.data
		}

		throw new Error('studentsService.deleteStudent')
	},
}

export { studentsService }
