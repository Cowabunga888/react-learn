import React, { MutableRefObject } from 'react'
import { IStudentList, IStudentTable } from '../../../../pages/react-query-page/type'
import { Button, FileInput, Select, TextInput } from '@mantine/core'
import { upsertFields } from './fields'
import { RiFileImageLine } from '@remixicon/react'
import { useForm } from 'react-hook-form'

interface IUpSertModalBody {
	type: string
	student: MutableRefObject<IStudentTable | IStudentList | null>
}

function UpSertModalBody({ type, student }: Readonly<IUpSertModalBody>) {
	const { register, handleSubmit, setValue } = useForm<any>()
	const onSubmit: any = (data: any) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{type === 'UPDATE_STUDENT' && `Update student: ${student?.current?.id}`}
			{type === 'ADD_STUDENT' && `Add new student`}

			<div className="grid grid-cols-6 gap-2">
				{upsertFields.map((field) => {
					switch (field.type) {
						case 'text':
							return (
								<TextInput
									className="col-span-3"
									size="xs"
									label={field.label}
									placeholder={field.placeholder}
									key={field.name}
									{...register(field.name)}
									name={field.name}
								/>
							)
						case 'select':
							return (
								<Select
									className="col-span-3"
									label={field.label}
									placeholder={field.placeholder}
									data={['React', 'Angular', 'Vue', 'Svelte']}
									key={field.name}
									size="xs"
									{...register(field.name)}
									onChange={(e) => {
										console.log(e)
									}}
								/>
							)
						case 'upload-img':
							return (
								<FileInput
									className="col-span-3"
									size="xs"
									label={field.label}
									placeholder={field.placeholder}
									key={field.name}
									rightSection={<RiFileImageLine size={15} />}
									{...register(field.name)}
									onChange={(e) => {
										console.log(e)
									}}
								/>
							)
						default:
							return null
					}
				})}
			</div>
			<Button type="submit" color="lime" size="xs" className="mt-2">
				Submit
			</Button>
		</form>
	)
}

export default UpSertModalBody
