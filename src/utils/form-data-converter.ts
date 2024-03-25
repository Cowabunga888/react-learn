export const convertToFormData = (body: any) => {
	const formData = new FormData()

	const appendFormData = (data: any, parentKey = '') => {
		for (const key in data) {
			if (Object.hasOwn(data, key)) {
				const value = data[key]

				const newKey = parentKey ? `${parentKey}[${key}]` : key

				if (value instanceof File) {
					formData.append(newKey, value)
				} else if (typeof value === 'object' && value !== null) {
					appendFormData(value, newKey)
				} else {
					formData.append(newKey, value)
				}
			}
		}
	}

	// Start the recursive appending process
	appendFormData(body)

	return formData
}
