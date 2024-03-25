import { Box, Button, LoadingOverlay } from '@mantine/core'
import { MutableRefObject, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useAddNewStudentTable } from '../../../../pages/react-query-page/hooks/useAddNewStudentTable'
import {
	IAddNewStudentTableParams,
	IStudentList,
	IStudentTable,
	IUpdateStudentTableParams,
} from '../../../../pages/react-query-page/type'
import DynamicFormInput from '../dynamic-input'
import { upsertFields } from './fields'
import { useUpdateStudentTable } from '../../../../pages/react-query-page/hooks/useUpdateStudentTable'
import toast from 'react-hot-toast'

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
		;(addIsSuccess || updateIsSuccess) && close()

		addIsSuccess && toast.success('Adding successfully!')
		updateIsSuccess && toast.success('Updating successfully!')

		addIsError && toast.error('Adding failed!')
		updateIsError && toast.error('Updating failed!')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [addIsSuccess, updateIsSuccess, addIsError, updateIsError])

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
								<div className="col-span-3" key={i}>
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
