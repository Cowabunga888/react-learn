import { useCallback, useState } from 'react'
import AppBlockQuote from '../../../components/block-quotes'
import ChildComponent from './child'

function UseCallbackPageView() {
	const [count1, setCount1] = useState<number>(0)

	// hàm sẽ được tạo mới khi component parent rerender
	// nếu không dùng useCallback thì ChildComponent chắc chắn rerender
	const handleIncrease = useCallback(() => {
		setCount1((prev) => prev + 1)
	}, [])
	// khi dùng useCallback thì useCallback sẽ mang giá trị tham chiếu [địa chỉ vùng nhớ] của func ra ngoài component này!
	// và lập tức handleIncrease sẽ trở thành global func cho UseCallbackPage component
	// khi được useCallback mang ra ngoài, thì handleIncrease cũng sẽ không tạo mới lại sau mỗi lần rerender
	// làm cho địa chỉ vùng nhớ của func handleIncrease không thay đổi
	// lúc này memo của child sẽ hiểu được prop onIncrease không thay đổi, và ngăn chặn ChildComponent rerender không cần thiết

	// useCallback thường dùng chung với memo(), nếu dùng useCallback mà không có memo cho child component => điều này vô nghĩa
	// vì đằng nào child component cũng sẽ rerender khi không có useCallback

	/*
    const a = ()=>{}
    const b = ()=>{}
    mắc dù cú pháp giống nhau nhưng giá trị tham chiếu là khác nhau sau mỗi lần tạo
    nên khi so sánh a === b thì chúng không bằng nhau
    khi so sánh func a === func b thì js chỉ đang so sánh địa chỉ vùng nhớ chứ không so sánh giá trị của a và b
    vì func là kiểu dữ liệu tham chiếu
    Kiểu tham chiếu (Reference Types): Kiểu này thì phức tạp hơn kiểu tham trị và được 
    dùng cho các kiểu dữ liệu phức tạp: Object, Array, Function. Ở đây khi gán cho a, b một giá trị func thì nó không lưu lại giá trị này 
    mà thực chất nó lưu lại địa chỉ của ô nhớ lưu giá trị này.
    ==========
    a === b => false
  */

	return (
		<div>
			<div className="flex items-center justify-center gap-2">
				<h2 className="text-lg font-semibold">Parent count 1: {count1}</h2>
			</div>
			<ChildComponent onIncrease={handleIncrease} />
			<AppBlockQuote>
				<p className="text-red-400">## useCallback</p>
				<p>1. Tránh tạo ra các hàm mới không cần thiết trong component</p>
				<p>- Mặc dù có memo nhưng child vẫn rerender</p>
				<p>- Do func prop truyền vào child mang giá trị tham chiếu khác nhau</p>
				<p>- Nên memo vẫn cho là prop thay đổi sau khi parent rerender</p>
			</AppBlockQuote>
		</div>
	)
}

export default UseCallbackPageView
