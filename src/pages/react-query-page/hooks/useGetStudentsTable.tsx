import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { studentsService } from '../services'
import { IGetStudentsTableParams } from '../type'

export const useGetStudentsTable = ({ page, perPage }: IGetStudentsTableParams) => {
	return useQuery({
		queryKey: ['useGetStudentsTable', { page, perPage }],
		queryFn: () => studentsService.getStudents({ page, perPage }).then((res) => res),
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60,
	})
}
