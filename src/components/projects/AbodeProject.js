import React from 'react';
import abode from '../../assets/abode.jpg';
import github_icon from '../../assets/icons/github_grey3.png';
import video_icon from '../../assets/icons/video_grey3.png';
import play_icon from '../../assets/icons/play_grey3.png';

const AbodeProject = () => {
	return (
		<div className="solo-card">
			<a href="https://abodehaven.herokuapp.com/">
				<img src={abode} className="project-solo" alt="city at night" />
			</a>

			<h3>
				<strong>Abode Haven</strong> is an app for Abode Haven's building management admin and their apartments.
				<ul>
					<li>Admin can add, update, delete buildings and apartments based on availability.</li>
					<li>Apartment seekers can view all available apartments.</li>
					<li>Admin sign in: lola@gmail.com, pw: password</li>
					<li>Built with Ruby on Rails, Postgres, Bootstrap and CSS</li>
				</ul>
			</h3>
			<div className="icons-kayak">
				<a href="https://abodehaven.herokuapp.com">
					<img src={play_icon} className="icon play" alt="" />
				</a>

				<a href="https://youtu.be/tDIepDugwbc">
					<img src={video_icon} className="icon video" alt="" />
				</a>

				<a href="https://github.com/zoey7117/abode-haven/tree/heroku_work">
					<img src={github_icon} className="icon github_fe" alt="" />
				</a>
			</div>
		</div>
	);
};

export default AbodeProject;
