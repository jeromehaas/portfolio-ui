// IMPORTS
import './site.scss';
import Link from 'next/link';

// SITE
const Site = ({ children }) => {

	// RENDER
	return (
		<div className="site">
			<nav className="site__navigation navigation">
				<div className="navigation__item">
					<Link className="navigation__link" href="/">Hello</Link> 
				</div>
				<div className="navigation__item">
					<Link className="navigation__link" href="/experiences">Experiences</Link> 
				</div>
				<div className="navigation__item">
					<Link className="navigation__link" href="/tech-stack">Tech Stack</Link> 
				</div>
				<div className="navigation__item">
					<Link className="navigation__link" href="/contact">Contact</Link> 
				</div>
				<div className="navigation__item">
					<Link className="navigation__link" href="work">Work</Link> 
				</div>
			</nav>
			<main className="site__content">
				{ children }
			</main>
		</div>
	);

};

// EXPORTS
export default Site;