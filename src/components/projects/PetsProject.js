import React from 'react';
import ReactPlayer from 'react-player';

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
			</div>
		</div>
	);
};

export default PetsProject;
