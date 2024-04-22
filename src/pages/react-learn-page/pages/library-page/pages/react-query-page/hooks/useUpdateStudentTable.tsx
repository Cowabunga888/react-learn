import { useMutation, useQueryClient } from '@tanstack/react-query'
import { studentsService } from '../services'
import { IUpdateStudentTableParams } from '../type'

export const useUpdateStudentTable = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['useUpdateStudentTable'],
		mutationFn: (student: IUpdateStudentTableParams) => studentsService.updateStudent(student).then((res) => res),
		onSuccess: () => {
			queryClient.refetchQueries({
				queryKey: ['useGetStudentsTable'],
			})
		},
	})
}
