import React from 'react';
import simon2 from '../../assets/simon2.jpg';
import github_icon from '../../assets/icons/github_grey3.png';

import play_icon from '../../assets/icons/play_grey3.png';

const SimonProject = () => {
	return (
		<div className="solo-card">
			<a href="https://colorpicksimon.netlify.app">
				<img src={simon2} className="project-solo" alt="game home page" />
			</a>

			<h3>
				<strong>Color Pick Simon</strong> is variation of a childhood game.
				<ul>
					<li>In order to win, you match color sequences a total of 10 times.</li>
					<li>Sequences start with one color, and then add one to each sucessful sequence.</li>
					<li>Built with CSS, HTML and Javascript.</li>
				</ul>
			</h3>
			<div className="icons-simon">
				<a href="https://colorpicksimon.netlify.app">
					<img src={play_icon} className="icon play" alt="" />
				</a>

				<a href="https://github.com/zoey7117/color-pick2">
					<img src={github_icon} className="icon github_fe" alt="" />
				</a>
			</div>
		</div>
	);
};

export default SimonProject;
