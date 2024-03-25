import { useMutation, useQueryClient } from '@tanstack/react-query'
import { studentsService } from '../services'
import { IAddNewStudentTableParams } from '../type'

export const useAddNewStudentTable = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['useAddNewStudentTable'],
		mutationFn: (student: IAddNewStudentTableParams) => studentsService.addStudent(student).then((res) => res),
		onSuccess: () => {
			queryClient.refetchQueries({
				queryKey: ['useGetStudentsTable'],
			})
		},
	})
}
