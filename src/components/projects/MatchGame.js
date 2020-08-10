import React from 'react';
import match_gamealt2 from '../../assets/match_gamealt2.jpg';
import github_icon from '../../assets/icons/github_grey3.png';
import play_icon from '../../assets/icons/play_grey3.png';

const MatchGame = () => {
	return (
		<div className="solo-card match">
			<a href="https://match-car-game.netlify.app/">
				<img src={match_gamealt2} className="project-solo" alt="game home page" />
			</a>

			<h3>
				<strong>Match Game</strong> is variation of a childhood game.
				<ul>
					<li>In order to win, you match color sequences a total of 10 times.</li>
					<li>Sequences start with one color, and then one is added to each successful sequence.</li>
					<li>Built with CSS, HTML and Javascript.</li>
				</ul>
			</h3>
			<div className="icons-simon">
				<a href="https://match-car-game.netlify.app/">
					<img src={play_icon} className="icon play" alt="" />
				</a>

				<a href="https://github.com/zoey7117/match-game">
					<img src={github_icon} className="icon github_fe" alt="" />
				</a>
			</div>
		</div>
	);
};

export default MatchGame;
