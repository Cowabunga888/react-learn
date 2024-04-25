import AboutHeader from './components/about-header'
import ScrollingSkills from './components/scrolling-skills'
import './css/style.css'

function AboutPageView() {
	return (
		<div className="about-page">
			<section className="about-section">
				<AboutHeader />
			</section>
			<section className="about-section">
				<ScrollingSkills />
			</section>
		</div>
	)
}

export default AboutPageView
