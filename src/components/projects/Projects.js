import React from 'react';
import kayaksWh from '../../assets/kayaksWh.jpg';
import pets from '../../assets/pets.jpg';
import { Link } from 'react-router-dom';
import abode from '../../assets/abode.jpg';
import simon2 from '../../assets/simon2.jpg';

import './Projects.css';

class Projects extends React.Component {
	render() {
		return (
			<div className="cards">
				<Link to="/kayak">
					<img src={kayaksWh} className="project-card kayak" alt="" />
				</Link>
				<Link to="/pets">
					<img src={pets} className="project-card pets" alt="" />
				</Link>
				<Link to="/simon">
					<img src={simon2} className="project-card simon" alt="" />
				</Link>
				<Link to="/abode">
					<img src={abode} className="project-card abode" alt="" />
				</Link>
			</div>
		);
	}
}

export default Projects;
