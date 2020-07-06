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
				trips<br />• Persists data to a Rails database and provides a Rails API<br />• Displays a React, Redux
				frontend with Semantic-ui-React<br />• Fetches data from the Rails API using Javascript<br />
			</h3>
		</div>
	);
};

export default KayakProject;
