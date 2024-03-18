export interface IGetStudentsParams {
	page: number | string
	perPage: number | string
}

export interface IGetStudentsPayload {
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
	id: number
	first_name: string
	last_name: string
	email: string
	gender: string
	country: string
	avatar: string
	btc_address: string
}
