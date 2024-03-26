// get students
export interface IGetStudentsTableParams {
	page: number | string
	perPage: number | string
	option?: any
}

export interface IGetStudentsTablePayload {
	data: {
		first: number
		prev: null
		next: number
		last: number
		pages: number
		items: number
		data: IStudent[]
	}
	status: number
}

export interface IStudent {
	id: string
	first_name: string
	last_name: string
	email: string
	gender: string
	country: string
	avatar: string
	btc_address: string
}

// add new student
export interface IAddNewStudentTableParams {
	first_name: string
	last_name: string
	email: string
	gender: string
	country: string
	avatar: string
	btc_address: string
}
export interface IAddStudentTablePayload {
	data: IStudent
	status: number
}

// update student
export interface IUpdateStudentTableParams {
	id: string
	first_name: string
	last_name: string
	email: string
	gender: string
	country: string
	avatar: string
	btc_address: string
}
export interface IUpdateStudentTablePayload {
	data: IStudent
	status: number
}

// delete student
export interface IDeleteStudentTableParams {
	id: string
}

export interface IDeleteStudentTablePayload {
	data: IStudent
	status: number
}
