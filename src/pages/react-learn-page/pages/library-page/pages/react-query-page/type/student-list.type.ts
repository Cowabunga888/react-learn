export interface IGetStudentsListParams {
	page: number | string
	perPage: number | string
}

export interface IGetStudentsListPayload {
	data: {
		first: number
		prev: null
		next: number
		last: number
		pages: number
		items: number
		data: IStudentList[]
	}
	status: number
}

export interface IStudentList {
	id: string
	first_name: string
	last_name: string
	email: string
	gender: string
	country: string
	avatar: string
	btc_address: string
}
