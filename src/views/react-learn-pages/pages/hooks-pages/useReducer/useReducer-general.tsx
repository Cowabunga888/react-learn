import AppBlockQuote from 'src/components/block-quotes'

function UseReducerGeneral() {
	return (
		<>
			<AppBlockQuote>
				<p className="text-red-400">## useReducer</p>
				<p>
					1. Bất kể logic nào giải quyết được bằng useState, useReducer đều có thể giải quyết được, và ngược
					lại
				</p>
				<p>2. useReducer giải quyết tốt hơn đối với 1 số state phức tạp</p>
				<p>
					3. vd: state có array object lồng nhau nhiều cấp, nhiều state trong component, hoặc state phụ thuộc
					vào state khác
				</p>
			</AppBlockQuote>

			<div className="flex justify-start gap-3">
				<AppBlockQuote>
					<p className="text-red-400">## useState</p>
					<p>1. Init state: value 0</p>
					<p>2. Action: up (state + 1) || down (state - 1)</p>
				</AppBlockQuote>
				<AppBlockQuote>
					<p className="text-red-400">## useReducer</p>
					<p>1. Init state: value 0</p>
					<p>2. Action: up (state + 1) || down (state - 1)</p>
					<p>3. Reducer</p>
					<p>4. Dispatch action</p>
				</AppBlockQuote>
			</div>
		</>
	)
}

export default UseReducerGeneral
