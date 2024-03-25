const upsertFields = [
	{
		name: 'first_name',
		label: 'First name',
		placeholder: 'Enter first name',
		type: 'text',
		required: true,
	},
	{
		name: 'last_name',
		label: 'Last name',
		placeholder: 'Enter last name',
		type: 'text',
		required: true,
	},
	{
		name: 'email',
		label: 'Email',
		placeholder: 'Enter email',
		type: 'text',
		required: true,
	},
	{
		name: 'gender',
		label: 'Gender',
		placeholder: 'Select gender',
		type: 'select',
		required: true,
		data: [
			{ label: 'Male', value: 'Male' },
			{ label: 'Female', value: 'Female' },
		],
	},
	{
		name: 'country',
		label: 'Country',
		placeholder: 'Select country',
		type: 'select',
		required: true,
		data: [
			{ label: 'Vietnam', value: 'vn' },
			{ label: 'USA', value: 'us' },
			{ label: 'France', value: 'fr' },
			{ label: 'China', value: 'ch' },
			{ label: 'Indonesia', value: 'in' },
			{ label: 'Russia', value: 'ru' },
		],
	},
	{
		name: 'avatar',
		label: 'Avatar',
		placeholder: 'File',
		type: 'upload-img',
		required: true,
	},
	{
		name: 'btc_address',
		label: 'Address',
		placeholder: 'Enter address',
		type: 'text',
		required: true,
	},
]

export { upsertFields }
