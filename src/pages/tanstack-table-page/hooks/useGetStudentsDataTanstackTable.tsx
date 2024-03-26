import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { studentsService } from '../services'
import { IGetStudentsTableParams } from '../type'

export const useGetStudentsDataTanstackTable = ({ page, perPage }: IGetStudentsTableParams) => {
	console.log(page, perPage)
	return useQuery({
		queryKey: ['useGetStudentsDataTanstackTable', { page, perPage }],
		queryFn: () => studentsService.getStudents({ page, perPage }).then((res) => res),
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60,
	})
}
