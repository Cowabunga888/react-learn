import { RiReactjsLine } from '@remixicon/react'
import { Outlet } from 'react-router-dom'

function LibraryPageView() {
	return (
		<div className="p-2">
			<div className="p-2 text-center text-xl text-[#788AEB] font-bold uppercase flex items-center justify-center">
				<RiReactjsLine /> <span>Library</span>
			</div>

			<Outlet />
		</div>
	)
}

export default LibraryPageView
