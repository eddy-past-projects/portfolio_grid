import React from 'react';
import '../cssFiles/Resume.css';

const Resume = () => {
	return (
		<div className="resume-container">
			<h1>SKILLS</h1>
			<h6>JavaScript | CSS | HTML | React | Redux | Ruby on Rails | RESTful APIs | Adobe Creative Cloud</h6>
			<h1>PROJECTS</h1>
			<h3>Adopt a Pet, a React app. Github Frontend | Github Backend | Demo</h3>
			<h4>an app for adopting/maintaining a virtual pet without the upkeep of a live one</h4>
			<p>
				Persists each user's pets and experience to a Postgres database and provides a Rails API with JWT
				authorization. Displays a React frontend with Semantic-ui-React and CSS. Employs flexbox with hamburger
				menu
			</p>
			<h3>Come on Kayak, a React-Redux app. Github Frontend | Github Backend | Demo</h3>
			<h4>an app for kayakers to make comments on past trips and create upcoming ones</h4>
			<p>
				Persists data to a Rails database and provides a Rails API. Displays a React, Redux frontend with
				Semantic-ui-React. Fetches data from the Rails API using Javascript.
			</p>
			<h3>Earth Paints, a React app. Github Frontend | Github Backend | Demo</h3>
			<h4>an app to discover images that Google Earth takes from afar</h4>
			<p>
				Persists data to a Rails database and provides a Rails API. Incorporates a search bar to sort by
				Country. Displays a React frontend with Semantic UI React. Fetches data from the Rails API using
				Javascript.
			</p>
			<h3>Match Game, a vanilla Javascript app. Github | Demo</h3>
			<h4>a memory game app</h4>
			<p>Built with vanilla Javacript, CSS, HTML.</p>
			<h1>EMPLOYMENT HISTORY</h1>
			<p>
				Freelance Software Engineer | August 2019-Present Freelance Print, Digital Art Director | June
				2017-Present Various Clients ranging from Publications to Individuals Digital Art Director | September
				2011-May 2017 Hearst | Women's Health | Prevention | People Magazine all located in New York, NY
				Reviewed content from print material and translated it using elements of company’s designated brand for
				user interaction on ipad/iphone. Utilized Edge Animate and Photoshop to produce engaging interactive
				material for the reader. Redesigned ipad/iphone editions to reflect current format to insure continued
				viewing by subscribers. Directed staff of 4, troubleshot design decisions to improve layout to best
				captivate and maintain readers’ attention. Art Director | April 1996-August 2011 Shape Magazine | Time
				Inc. Custom Publishing | TV Guide | Worth Magazine all located in New York, NY Produced effective
				layouts, contributed to multiple redesigns under high pressure environment; met deadlines on or ahead of
				schedule while continuously updating content based on feedback. Collaborated with editors to visualize
				their perception of stories; independently created end products. Conceptualized story content with
				illustrators to determine visual representation; hired talent based on whether subject matter and
				illustrator/photographer specialization were aligned.
			</p>
			<p>
				Awarded for outstanding design by: Print’s Best Typography | PRINT’S Regional Design Annual | The
				Society of Publication Design
			</p>
			<h1>EDUCATION</h1>
			<p>
				Flatiron School, New York, NY | Full Stack Web Development, Ruby on Rails and JavaScript immersive
				program General Assembly, New York, NY | Front-end web development New School University , New York, NY
				| Non matriculated coursework on HTML, web design New York University, New York, NY | Dreamweaver
				coursework Kansas University, Lawrence, KS | Bachelor of Fine Arts in Visual Communications
			</p>
		</div>
	);
};
export default Resume;
