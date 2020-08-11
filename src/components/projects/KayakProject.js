import React from 'react';
import kayaksWh from '../../assets/kayaksWh.jpg';

const KayakProject = () => {
	return (
		<div className="solo-card">
			<a href="https://kayaking-client.herokuapp.com/">
				<img src={kayaksWh} className="project-solo" alt="kayak" />{' '}
			</a>

			<h3>
				<strong>Come On Kayak</strong> is an app for kayakers to make comments on trips and create upcoming
				trips.
				<ul>
					<li>Persists data to a Rails database and provides a Rails API.</li>
					<li>Displays a React, Redux frontend with Semantic-ui-React.</li>
					<li>Fetches data from the Rails API using Javascript.</li>
				</ul>
			</h3>
			<div className="icons">
				<a href="https://kayaking-client.herokuapp.com">
					<i class="fas fa-play-circle fa-2x" />
				</a>

				<a href="https://youtu.be/9nf-APieUaM">
					<i class="fas fa-video fa-2x" />
				</a>
				<a href="https://github.com/zoey7117/kayaking_frontend">
					<i class="fab fa-github fa-2x" />
				</a>

				<a href="https://github.com/zoey7117/kayaking-backend">
					<i class="fab fa-github fa-2x" />
				</a>
			</div>
		</div>
	);
};

export default KayakProject;
