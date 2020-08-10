import React from 'react';
import pets from '../../assets/pets.jpg';
import github_icon from '../../assets/icons/github_grey3.png';

const PetsProject = () => {
	return (
		<div className="solo-card">
			<a href="https://pets-frontend.netlify.app/">
				<img src={pets} className="project-solo" alt="game home page" />
			</a>

			<h3>
				<strong>Adopt A Pet</strong> is an app for adopting/maintaining a virtual pet without the upkeep of a
				live one
				<ul>
					<li>Persists each user to a Postgres database</li>

					<li>
						Rebuilt from a Single Page Application with Javascript to React frontend and a Rails API with
						JWT authorization
					</li>
					<li>Employs flexbox with hamburger menu</li>
				</ul>
			</h3>
			<div className="icons">
				<a href="https://github.com/zoey7117/petstoo_frontend/">
					<img src={github_icon} className="icon github_fe" alt="" />
				</a>

				<a href="https://github.com/zoey7117/petstoo_backend">
					<img src={github_icon} className="icon github_be" alt="" />
				</a>
			</div>
		</div>
	);
};

export default PetsProject;
