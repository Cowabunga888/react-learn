import { useMutation, useQueryClient } from '@tanstack/react-query'
import { studentsService } from '../services'
import { IDeleteStudentTableParams } from '../type'

export const useDeleteStudentTable = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['useDeleteStudentTable'],
		mutationFn: ({ id }: IDeleteStudentTableParams) => studentsService.deleteStudent({ id }).then((res) => res),
		onSuccess: () => {
			queryClient.refetchQueries({
				queryKey: ['useGetStudentsTable'],
			})
		},
	})
}
