import React from 'react';
import linkedin2 from '../../assets/linkedin2.jpg';
import ceddy_resume from '../../assets/ceddy_resume.pdf';
import '../cssFiles/AboutMe.css';

const AboutMe = () => {
	return (
		<div>
			<div className="text">
				<div className="image">
					<img src={linkedin2} className="my-photo" alt="" />
				</div>

				<h1>I've been around!</h1>
				<h3>
					Before the metamorphosis of the internet, I was an editorial art director/designer for major
					publishing houses here in nyc. As the internet evolved, the plethora of magazines diminished and the
					usage of the revolving door increased. I broadened my skillset and became adept in designing for the
					iPad, iPhone.
				</h3>
				<h1>(and around).</h1>
				<h3>
					I graduated from the immersive software engineering program at Flatiron School. I'm eager to merge
					my newly acquired skills with the common thread of engaging the user with visually interesting
					solutions.
				</h3>
				<br />
				<footer>
					<a href={ceddy_resume}>
						<h5>click here to view my resume | </h5>
					</a>
					<a href="https://www.linkedin.com/in/cynthiaeddy">
						<h5>linkedin profile | </h5>
					</a>
					<a href="http://www.cynthiaeddy.com">
						<h5>print and digital portfolio | </h5>
					</a>
					<a href="mailto:cynthiaeddynyc@gmail.com">
						<h5>email</h5>
					</a>
				</footer>
			</div>
		</div>
	);
};

export default AboutMe;
