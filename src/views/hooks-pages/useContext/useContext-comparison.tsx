import NoContext from './comparison/no-context'
import { WithContext } from './comparison/with-context/theme-context'

function UseContext() {
	return (
		<div className="w-full flex items-center justify-between gap-2">
			<div className="w-1/2 h-[300px] p-3 border border-dashed border-red-400 rounded-md">
				<NoContext />
			</div>
			<div className="w-1/2 h-[300px] p-3 border border-dashed border-green-400 rounded-md">
				<WithContext />
			</div>
		</div>
	)
}

export default UseContext
