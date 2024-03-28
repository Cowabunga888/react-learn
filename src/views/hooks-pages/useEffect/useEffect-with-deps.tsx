import { Button } from '@mantine/core'
import { useEffect, useState } from 'react'

function UseEffectWithDeps() {
	const buttons = [
		{
			name: 'Posts',
			contents:
				'tiusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
		},
		{
			name: 'Comments',
			contents:
				'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
		},
		{
			name: 'Albums',
			contents:
				'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
		},
	]

	const [title, setTitle] = useState<string>(buttons[0].name)
	const [content, setContent] = useState<string>(buttons[0].contents)

	const handleChangeClick = (index: number) => {
		setTitle(buttons[index].name)
		setContent(buttons[index].contents)
	}

	useEffect(() => {
		console.log('title change!!!')
	}, [title])

	useEffect(() => {
		console.log('content change!!!')
	}, [content])

	return (
		<>
			<div className="flex items-center justify-center gap-2 mt-3">
				{buttons.map((btn, i) => {
					return (
						<Button
							key={btn.name}
							radius="xs"
							size="xs"
							variant="filled"
							onClick={() => {
								handleChangeClick(i)
							}}
						>
							{btn.name}
						</Button>
					)
				})}
			</div>

			<p className="text-center mt-4">{title}</p>
			<p className="text-center mt-2 m-auto w-[300px]" dangerouslySetInnerHTML={{ __html: content }} />
		</>
	)
}

export default UseEffectWithDeps
