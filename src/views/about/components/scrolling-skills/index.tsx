import { randomId } from '@mantine/hooks'
import './style.css'
import {
	RiCss3Line,
	RiGithubLine,
	RiHtml5Line,
	RiJavascriptLine,
	RiNextjsLine,
	RiQuillPenLine,
	RiReactjsLine,
	RiTailwindCssLine,
} from '@remixicon/react'

function ScrollingSkills() {
	const coreSkill = [
		{ isNew: true, icon: <RiReactjsLine size={20} color="var(--mantine-color-color-filled)" />, lable: 'React JS' },
		{ isNew: false, icon: <RiQuillPenLine size={20} color="var(--mantine-color-color-filled)" />, lable: 'AntD' },
		{ isNew: true, icon: <RiNextjsLine size={20} color="var(--mantine-color-color-filled)" />, lable: 'Next JS' },
		{ isNew: false, icon: <RiQuillPenLine size={20} color="var(--mantine-color-color-filled)" />, lable: 'UI/UX' },
		{ isNew: true, icon: <RiReactjsLine size={20} color="var(--mantine-color-color-filled)" />, lable: 'Tanstack' },
		{ isNew: false, icon: <RiHtml5Line size={20} color="var(--mantine-color-color-filled)" />, lable: 'HTML' },
		{ isNew: false, icon: <RiQuillPenLine size={20} color="var(--mantine-color-color-filled)" />, lable: 'CSS' },
		{
			isNew: true,
			icon: <RiTailwindCssLine size={20} color="var(--mantine-color-color-filled)" />,
			lable: 'Tailwind',
		},
		{
			isNew: false,
			icon: <RiJavascriptLine size={20} color="var(--mantine-color-color-filled)" />,
			lable: 'JS-TS',
		},
		{ isNew: true, icon: <RiQuillPenLine size={20} color="var(--mantine-color-color-filled)" />, lable: 'Mantine' },
		{ isNew: false, icon: <RiGithubLine size={20} color="var(--mantine-color-color-filled)" />, lable: 'GIT' },
		{
			isNew: false,
			icon: <RiQuillPenLine size={20} color="var(--mantine-color-color-filled)" />,
			lable: 'Animation',
		},
		{ isNew: false, icon: <RiCss3Line size={20} color="var(--mantine-color-color-filled)" />, lable: 'CSS-SASS' },
	]

	const skills = [...coreSkill, ...coreSkill, ...coreSkill]

	return (
		<div className="skills-container">
			<div className="skills">
				{skills.map((skill) => {
					return (
						<span className={`skill ${skill.isNew && 'new-skill'}`} key={randomId()}>
							{skill.icon}
							<span>{skill.lable}</span>
						</span>
					)
				})}
			</div>
			<div className="skills">
				{skills.map((skill) => {
					return (
						<span className={`skill ${skill.isNew && 'new-skill'}`} key={randomId()}>
							{skill.icon}
							<span>{skill.lable}</span>
						</span>
					)
				})}
			</div>
		</div>
	)
}

export default ScrollingSkills
