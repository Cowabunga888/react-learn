import { Avatar, FileInput, Select, TextInput } from '@mantine/core'
import { RiFileImageLine } from '@remixicon/react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { getBase64 } from '../../../../../../../../utils/get-base64'

interface IDynamicFormInput {
	allFieldsRequired?: boolean
	field: {
		name: string
		label: string
		placeholder: string
		type: string
		required: boolean
		data?: { label: string; value: string }[]
	}
	defaultValue: string
}

function DynamicFormInput({ allFieldsRequired, field, defaultValue }: Readonly<IDynamicFormInput>) {
	const { register, setValue } = useFormContext()
	const [imgFile, setImgFile] = useState<string>()

	switch (field.type) {
		case 'text':
			return (
				<TextInput
					defaultValue={defaultValue}
					size="sm"
					label={field.label}
					placeholder={field.placeholder}
					key={field.name}
					{...register(field.name)}
					name={field.name}
					required={allFieldsRequired && field.required}
				/>
			)
		case 'select':
			return (
				<Select
					label={field.label}
					placeholder={field.placeholder}
					data={field?.data}
					defaultValue={defaultValue}
					key={field.name}
					size="sm"
					{...register(field.name, {
						required: allFieldsRequired && field.required,
					})}
					name={field.name}
					onChange={(value) => {
						setValue(field.name, value, { shouldValidate: true })
					}}
					allowDeselect={false}
					searchable
					required={allFieldsRequired && field.required}
				></Select>
			)
		case 'upload-img':
			return (
				<div className="flex gap-2 items-end">
					<FileInput
						accept="image/png,image/jpeg,image/jpg"
						className="col-span-4 max-w-[80%]"
						size="sm"
						label={field.label}
						placeholder={field.placeholder}
						key={field.name}
						rightSection={<RiFileImageLine size={15} />}
						{...register(field.name, {
							required: allFieldsRequired && field.required,
						})}
						name={field.name}
						onChange={(file) => {
							// imgFile && URL.revokeObjectURL(imgFile)
							if (file) {
								// setImgFile(URL.createObjectURL(file))
								getBase64(file).then((base64) => {
									setValue(field.name, base64, { shouldValidate: true })
									setImgFile(base64)
								})
							}
						}}
						classNames={{ wrapper: 'truncate text-ellipsis' }}
						required={allFieldsRequired && field.required}
					/>
					<Avatar
						size="md"
						src={imgFile ?? defaultValue}
						alt=""
						className="border border-dashed rounded-md"
					/>
				</div>
			)
		default:
			return null
	}
}

export default DynamicFormInput
