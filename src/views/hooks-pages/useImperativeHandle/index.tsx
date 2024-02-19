import React, { useImperativeHandle } from 'react'
import AppBlockQuote from '../../../components/block-quotes'

function UseImperativeHandlePageView() {
	// useImperativeHandle()
	return (
		<div>
			<AppBlockQuote>
				<p className="text-red-400">## useImperativeHandle</p>
				<p>Giúp tùy chỉnh ref của Function Component</p>
				<p>Function component không có atribute Ref</p>
				<p>Nên useImperativeHandle sẽ giúp tạo 1 biến -tương tự ref- để handle Function Component</p>
			</AppBlockQuote>
			<AppBlockQuote>
				<p className="text-red-400">## forwardRef</p>
				<p>Là một HOC -Higher order component-</p>
				<p>
					Cho phép truyền và tác động vào ref của DOM Element thông qua "ref" của component chứa DOM Element
					đó
				</p>
			</AppBlockQuote>
		</div>
	)
}

export default UseImperativeHandlePageView
