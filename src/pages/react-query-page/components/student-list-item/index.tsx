import { RiDeleteBinLine } from '@remixicon/react'
import { IStudent } from '../../type'

interface IStudentListItem {
	data: IStudent
}

function StudentListItem({ data }: Readonly<IStudentListItem>) {
	return (
		<div className="flex gap-2 mb-3 w-full text-sm border-b last:border-none">
			<img
				src={data.avatar}
				alt="avt"
				className="w-10 h-10 flex-shrink-0 border border-dashed rounded-md object-cover"
			/>
			<div className="flex flex-1 flex-col gap-1">
				<span className="font-bold">{data.first_name + ' ' + data.last_name}</span>
				<span>{data.gender}</span>
				<span className="italic">{data.email}</span>
			</div>

			<button type="button" className="text-[#aaa] hover:text-red-400">
				<RiDeleteBinLine />
			</button>
		</div>
	)
}

export default StudentListItem
