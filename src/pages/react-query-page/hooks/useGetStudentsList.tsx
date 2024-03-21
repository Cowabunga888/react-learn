import { useInfiniteQuery } from '@tanstack/react-query'
import { studentsService } from '../services'
import { IGetStudentsListParams } from '../type'

export const useGetStudentsList = ({ page, perPage }: IGetStudentsListParams) => {
	return useInfiniteQuery({
		queryKey: ['useGetStudentsList'],
		queryFn: ({ pageParam }) => studentsService.getStudents({ page: pageParam, perPage }).then((res) => res),
		initialPageParam: page,
		getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => lastPage.next,
		getPreviousPageParam: (firstPage, allPages, firstPageParam, allPageParams) => firstPage.prev,
	})
}
