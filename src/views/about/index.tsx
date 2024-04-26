import { useState } from 'react'
import AboutHeader from './components/about-header'
import ScrollingSkills from './components/scrolling-skills'
import SegmentNav from './components/segment-nav'
import './css/style.css'

function AboutPageView() {
	const [navData, setNavData] = useState({
		value: '#hello',
		data: [
			{
				label: (
					<a className="flex" href="#hello" onClick={() => handlesetNavData('#hello')}>
						Hello
					</a>
				),
				value: '#hello',
			},
			{
				label: (
					<a className="flex" href="#consulting" onClick={() => handlesetNavData('#consulting')}>
						Consulting
					</a>
				),
				value: '#consulting',
			},
			{
				label: (
					<a className="flex" href="#work-with-me" onClick={() => handlesetNavData('#work-with-me')}>
						Work with me
					</a>
				),
				value: '#work-with-me',
			},
		],
	})

	const handlesetNavData = (id: string) => {
		setNavData((prev) => {
			return {
				...prev,
				value: id,
			}
		})
	}

	return (
		<div className="about-page">
			<SegmentNav navData={navData} handlesetNavData={handlesetNavData} />

			<section className="about-section" id="hello">
				<AboutHeader />
			</section>
			<section className="about-section" id="consulting">
				consulting
				<ScrollingSkills />
			</section>
			<section className="about-section" id="work-with-me">
				work-with-me
				<ScrollingSkills />
			</section>
		</div>
	)
}

export default AboutPageView
