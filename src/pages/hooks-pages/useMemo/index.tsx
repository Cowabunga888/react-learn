import React, { useEffect, useState } from 'react'
import AppBlockQuote from '../../../components/block-quotes'
import { Button, Input } from '@mantine/core'

function UseMemoPage() {
	const [name, setName] = useState<string>('')
	const [price, setPrice] = useState<string>('')
	const [product, setProduct] = useState<{ name: string; price: number }[]>([])

	const total = product.reduce((result, prod) => result + prod.price, 0)

	const handleAddProduct = () => {
		setProduct([...product, { name, price: Number(price) }])
		setName('')
		setPrice('')
	}

	return (
		<div>
			<div className="flex flex-col gap-2 items-center justify-center">
				<Input
					placeholder="Input name"
					size="xs"
					value={name}
					w={200}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					placeholder="Input price"
					size="xs"
					type="number"
					value={price}
					w={200}
					onChange={(e) => setPrice(e.target.value)}
					onKeyUp={(e) => {
						e.key === 'Enter' && handleAddProduct()
					}}
				/>
				<Button onClick={handleAddProduct} radius="xs" size="xs" variant="filled" color="lime">
					Add
				</Button>
			</div>

			{product.length > 0 && (
				<div className="w-[500px] m-auto mt-2 p-2 rounded-md border flex flex-col gap-4">
					{product.map((prod, i) => {
						return (
							<div className="flex items-start justify-start gap-2 last:border-b-0 border-b" key={i}>
								<span>{i + 1}.</span>
								<div className="w-full flex flex-col items-start justify-between">
									<div className="w-full flex items-center justify-between">
										<span>name:</span> <span>{prod.name}</span>
									</div>
									<div className="w-full flex items-center justify-between">
										<span>price:</span> <span>{prod.price}</span>
									</div>
								</div>
							</div>
						)
					})}

					<div className="text-right">total: {total}</div>
				</div>
			)}

			<AppBlockQuote>
				<p className="text-red-400 text-lg">## useMemo</p>
				<p>1. Giúp tránh thực hiện 1 logic nào đó không cần thiết</p>
			</AppBlockQuote>
		</div>
	)
}

export default UseMemoPage
