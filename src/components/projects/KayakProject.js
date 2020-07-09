import React from 'react';
import kayaksWh from '../../assets/kayaksWh.jpg';
import github_icon from '../../assets/icons/github_grey3.png';
import video_icon from '../../assets/icons/video_grey3.png';
import play_icon from '../../assets/icons/play_grey3.png';

const KayakProject = () => {
	return (
		<div className="solo-card">
			<a href="https://kayaking-client.herokuapp.com/">
				<img src={kayaksWh} className="project-solo" alt="kayak" />{' '}
			</a>

			<h3>
				<strong>Come On Kayak</strong> is an app for kayakers to make comments on trips and create upcoming
				trips
				<ul>
					<li>Persists data to a Rails database and provides a Rails API</li>
					<li>Displays a React, Redux frontend with Semantic-ui-React</li>
					<li>Fetches data from the Rails API using Javascript</li>
				</ul>
			</h3>
			<div className="icons-kayak">
				<a href="https://kayaking-client.herokuapp.com">
					<img src={play_icon} className="icon play" alt="" />
				</a>

				<a href="https://youtu.be/9nf-APieUaM">
					<img src={video_icon} className="icon video" alt="" />
				</a>
				<a href="https://github.com/zoey7117/kayaking_frontend">
					<img src={github_icon} className="icon github_fe" alt="" />
				</a>

				<a href="https://github.com/zoey7117/kayaking-backend">
					<img src={github_icon} className="icon github_be" alt="" />
				</a>
			</div>
		</div>
	);
};

export default KayakProject;
