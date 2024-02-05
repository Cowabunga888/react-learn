import { Button, Loader } from '@mantine/core'
import React, { useEffect, useState } from 'react'

function UseEffectEmptyDeps() {
	const [reload, setReload] = useState<boolean>(false)

	const handleClick = () => {
		setReload(!reload)
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<Button radius="xs" size="xs" variant="filled" color={reload ? 'lime' : 'red'} onClick={handleClick}>
				Reload
			</Button>

			{reload && <ChildComponent />}
		</div>
	)
}

export default UseEffectEmptyDeps

const ChildComponent = () => {
	const [data, setData] = useState<any>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleFetchData = () => {
		setIsLoading(true)
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then((res) => res.json())
				.then((res) => setData(res))
				.finally(() => {
					setIsLoading(false)
				})
		}, 3000)
	}

	useEffect(() => {
		// chỉ gọi 1 lần sau khi component đã MOUTED
		// tránh trường hợp callback setstate liên tục làm cho component render vô tận
		handleFetchData()
	}, [])

	if (isLoading) {
		return (
			<div className="flex items-center justify-center mt-4">
				<Loader color="lime" />
			</div>
		)
	}

	return (
		<div className="mt-4">
			{data?.map((user: any) => {
				return (
					<div key={user?.id} className="mt-2">
						<div className="w-[500px] text-left"></div>
						{user?.id}. {user?.username}: {user?.email}
					</div>
				)
			})}
		</div>
	)
}
