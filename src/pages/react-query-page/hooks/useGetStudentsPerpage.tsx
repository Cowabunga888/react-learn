import { useQuery } from '@tanstack/react-query'
import { studentsService } from '../services'
import { IGetStudentsParams } from '../type'

export const useGetStudentsPerpage = ({ page, perPage }: IGetStudentsParams) => {
	return useQuery({
		queryKey: ['useGetStudentsPerpage'],
		queryFn: () => studentsService.getStudents({ page, perPage }).then((res) => res),
	})
}
