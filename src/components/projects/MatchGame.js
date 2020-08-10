import React from 'react';
import match_gamealt2 from '../../assets/match_gamealt2.jpg';

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
			<div className="icons">
				<a href="https://match-car-game.netlify.app/">
					<i class="fas fa-play-circle fa-2x" />
				</a>

				<a href="https://github.com/zoey7117/match-game">
					<i class="fab fa-github fa-2x" />
				</a>
			</div>
		</div>
	);
};

export default MatchGame;
