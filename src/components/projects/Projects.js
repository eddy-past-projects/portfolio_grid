import React from 'react';
import kayaksWh from '../../assets/kayaksWh.jpg';
import pets from '../../assets/pets.jpg';
import { Link } from 'react-router-dom';
import abode from '../../assets/abode.jpg';
import './Projects.css';

class Projects extends React.Component {
	render() {
		return (
			<div className="cards">
				<Link to="/pets">
					<img src={pets} className="project-card pets" alt="" />
				</Link>
				<Link to="/kayak">
					<img src={kayaksWh} className="project-card kayak" alt="" />
				</Link>
				<Link to="/abode">
					<img src={abode} className="project-card abode" alt="" />
				</Link>
				<Link to="/simon">
					<img src={abode} className="project-card simon" alt="" />
				</Link>
			</div>
		);
	}
}

export default Projects;
