import AppBlockQuote from '../../../components/block-quotes'

function UseContextGeneral() {
	return (
		<AppBlockQuote>
			<p className="text-red-400">## useContext</p>
			<p>
				1. Đây là hook nhằm đơn giản hóa việc truyền dữ liệu từ component cha xuống các component con mà không
				cần sử dụng props
			</p>
			<img
				src="/assets/images/hooks/useContext/useContext_img.png"
				alt="useContext_img"
				width={350}
				className="m-auto mt-2 rounded-md border border-dashed border-zinc-700"
			/>
		</AppBlockQuote>
	)
}

export default UseContextGeneral
