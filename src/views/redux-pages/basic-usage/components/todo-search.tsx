import { Button, Input } from '@mantine/core'
import { RiSearch2Line } from '@remixicon/react'

function TodoSearch() {
	return (
		<div>
			<p className="todo-label">Search</p>
			<div className="flex items-center justify-center gap-2 w-full">
				<Input name="search-input" radius="xs" placeholder="Search todo..." className="w-full" />
				<Button radius="xs" variant="filled" color="lime">
					<RiSearch2Line size={18} />
				</Button>
			</div>
		</div>
	)
}

export default TodoSearch
