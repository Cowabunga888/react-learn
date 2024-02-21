import { Link } from 'react-router-dom'
import AppBlockQuote from '../../../components/block-quotes'

/*
##reducer
function (state, actions)=>{switch case {action} return => new state}
1. Giá trị state mới luôn được tính toán dựa trên giá trị state trước đó
2. Không được thay đổi trực tiếp giá trị của state cũ, thay vào đó tạo 1 bản copy rồi mới chỉnh sửa return {...state}
3. Không được thêm các func bất đồng bộ vào reducer, ex: Math.random(), Date.now(), request tới server,... gây ảnh hưởng đến việc dự đoán kết quả của state
  
##actions
1. Là một object do dev quy định {type: string, payload?: any}
2. actionCreator: là một function trả về các action

##dispatch
1. Là một function từ phía UI => (action)=> reducer => new state
*/
function ReduxGeneralPage() {
	return (
		<div className="p-3">
			<img className="m-auto" src="/assets/videos/redux/redux.gif" alt="redux.gif" width={370} />
			<AppBlockQuote>
				<p className="text-red-400">## Reducer</p>
				<p>1. Giá trị state mới luôn được tính toán dựa trên giá trị state trước đó</p>
				<p>
					2. Không được thay đổi trực tiếp giá trị của state cũ, thay vào đó tạo 1 bản copy rồi mới chỉnh sửa
					return {`{...state}`}
				</p>
				<p>
					3. Không được thêm các func bất đồng bộ vào reducer, ex: Math.random(), Date.now(), request tới
					server,... gây ảnh hưởng đến việc dự đoán kết quả của state
				</p>

				<p className="text-red-400 mt-2">## Actions</p>
				<p>1. Là một object do dev quy định {`{type: string, payload?: any}`}</p>
				<p>2. actionCreator: là một function trả về các action</p>

				<p className="text-red-400 mt-2">## Dispatch</p>
				<p>
					1. Là một function từ phía UI {`=>`} (action) {`=>`} reducer {`=>`} new state
				</p>
			</AppBlockQuote>
		</div>
	)
}

export default ReduxGeneralPage
