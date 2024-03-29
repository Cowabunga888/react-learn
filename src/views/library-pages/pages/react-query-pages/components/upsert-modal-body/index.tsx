import { Box, Button, LoadingOverlay } from '@mantine/core'
import { MutableRefObject, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import DynamicFormInput from '../dynamic-input'
import { upsertFields } from './fields'
import toast from 'react-hot-toast'
import { randomId } from '@mantine/hooks'
import {
	IAddNewStudentTableParams,
	IStudentList,
	IStudentTable,
	IUpdateStudentTableParams,
} from '../../../../../../pages/library-page/pages/react-query-page/type'
import { useAddNewStudentTable } from '../../../../../../pages/library-page/pages/react-query-page/hooks/useAddNewStudentTable'
import { useUpdateStudentTable } from '../../../../../../pages/library-page/pages/react-query-page/hooks/useUpdateStudentTable'
import { useDeleteStudentTable } from '../../../../../../pages/library-page/pages/react-query-page/hooks/useDeleteStudentTable'

interface IUpSertModalBody {
	type: string
	student: MutableRefObject<IStudentTable | IStudentList | null>
	close: () => void
}

function UpSertModalBody({ type, student, close }: Readonly<IUpSertModalBody>) {
	const {
		mutate: addStudent,
		isSuccess: addIsSuccess,
		isPending: addIsPending,
		isError: addIsError,
	} = useAddNewStudentTable()

	const {
		mutate: updateStudent,
		isSuccess: updateIsSuccess,
		isPending: updateIsPending,
		isError: updateIsError,
	} = useUpdateStudentTable()

	const { mutate: deleteStudent, isSuccess: deleteIsSuccess, isError: deleteIsError } = useDeleteStudentTable()

	const methods = useForm<IAddNewStudentTableParams | IUpdateStudentTableParams>()
	const onSubmit = (data: IAddNewStudentTableParams | IUpdateStudentTableParams) => {
		if (type === 'ADD_STUDENT') {
			addStudent(data)
		} else if (type === 'UPDATE_STUDENT') {
			if (student.current) {
				updateStudent({
					...data,
					id: student.current.id,
					avatar: data.avatar ? data.avatar : student.current.avatar,
				})
			}
		}
	}

	useEffect(() => {
		if (addIsSuccess || updateIsSuccess || deleteIsSuccess) close()

		addIsSuccess && toast.success('Add successfully!')
		updateIsSuccess && toast.success('Update successfully!')
		deleteIsSuccess && toast.success('Delete successfully!')

		addIsError && toast.error('Add failed!')
		updateIsError && toast.error('Update failed!')
		deleteIsError && toast.error('Delete failed!')

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [addIsSuccess, updateIsSuccess, addIsError, updateIsError, deleteIsSuccess, deleteIsError])

	if (type === 'DELETE_STUDENT') {
		return (
			<div className="flex flex-col gap-3">
				<div>
					You want to delete {student?.current?.first_name} {student?.current?.last_name}?
				</div>
				<div className="flex gap-2">
					<Button
						onClick={() => {
							student?.current && deleteStudent({ id: student.current?.id })
						}}
						color="red"
						size="sm"
					>
						Yes
					</Button>
					<Button onClick={close} color="lime" size="sm">
						No
					</Button>
				</div>
			</div>
		)
	}

	return (
		<FormProvider {...methods}>
			<Box pos="relative">
				{(addIsPending || updateIsPending) && (
					<LoadingOverlay
						visible={true}
						color="lime"
						zIndex={1000}
						overlayProps={{ radius: 'sm', blur: 2 }}
					/>
				)}

				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<div className="mb-3 font-semibold uppercase text-lime-600">
						{type === 'UPDATE_STUDENT' && `Update student: ${student?.current?.id}`}
						{type === 'ADD_STUDENT' && `Add new student`}
					</div>

					<div className="grid grid-cols-6 gap-2">
						{upsertFields.map((field, i) => {
							let defaultValue = ''
							if (student.current) {
								defaultValue = (student.current as any)[field.name]
							}

							return (
								<div className="col-span-3" key={randomId()}>
									<DynamicFormInput
										allFieldsRequired={type === 'ADD_STUDENT'}
										field={field}
										defaultValue={defaultValue}
									/>
								</div>
							)
						})}
					</div>

					<Button type="submit" color="lime" size="xs" className="mt-3">
						Submit
					</Button>
				</form>
			</Box>
		</FormProvider>
	)
}

export default UpSertModalBody
