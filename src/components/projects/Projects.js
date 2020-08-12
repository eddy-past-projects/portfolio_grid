import React from 'react';
import kayaksWh from '../../assets/kayaksWh.jpg';
import pets from '../../assets/pets.jpg';
import { Link } from 'react-router-dom';
import abode from '../../assets/abode.jpg';
import simon2 from '../../assets/simon2.jpg';
import match_gamealt2 from '../../assets/match_gamealt2.jpg';

import '../cssFiles/Projects.css';

class Projects extends React.Component {
	render() {
		return (
			<div className="cards">
				<Link to="/pets">
					<img src={pets} className="project-card pets" alt="pet card" />
				</Link>
				<Link to="/simon">
					<img src={simon2} className="project-card simon" alt="simon card" />
				</Link>
				<Link to="/match-game">
					<img src={match_gamealt2} className="project-card match" alt="match card" />
				</Link>
				<Link to="/kayak">
					<img src={kayaksWh} className="project-card kayak" alt="kayak card" />
				</Link>
				<Link to="/abode">
					<img src={abode} className="project-card abode" alt="abode haven cards" />
				</Link>
			</div>
		);
	}
}

export default Projects;
