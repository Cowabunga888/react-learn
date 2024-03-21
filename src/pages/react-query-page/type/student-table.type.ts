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
		data: IStudentTable[]
	}
	status: number
}

export interface IStudentTable {
	id: number
	first_name: string
	last_name: string
	email: string
	gender: string
	country: string
	avatar: string
	btc_address: string
}