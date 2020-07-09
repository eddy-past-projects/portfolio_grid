import React from 'react';
import ReactPlayer from 'react-player';
import github_icon from '../../assets/icons/github_grey3.png';

const PetsProject = () => {
	return (
		<div className="solo-card pet-project">
			<div className="player-wrapper">
				<ReactPlayer url="https://youtu.be/fUbOiKkOcqw" controls={true} className="react-player" width="100%" />

				<h3>
					<strong>Adopt A Pet</strong> is an app for adopting/maintaining a virtual pet without the upkeep of
					a live one<br />• Persists each user to a Postgres database<br />• Presently MVP, rebuilt from a
					Single Page Application with Javascript to React frontend and a Rails API with JWT authorization<br />•
					Employs flexbox with hamburger menu<br />
				</h3>
				<div className="icons">
					<a href="https://github.com/zoey7117/petstoo_frontend/tree/stylini">
						<img src={github_icon} className="icon github_fe" alt="" />
					</a>

					<a href="https://github.com/zoey7117/petstoo_backend">
						<img src={github_icon} className="icon github_be" alt="" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default PetsProject;
