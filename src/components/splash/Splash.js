import React from 'react';
import '../home/myLogoRoll.css';
import swirl_sm from '../../assets/swirl_sm.jpg';
import '../home/Home.css';

const Splash = () => {
	return (
		<div>
			<div className="home-image">
				<div className="homeLogo swirl_sm">
					<img src={swirl_sm} className="swirl" alt="logo" />
				</div>
			</div>
		</div>
	);
};
export default Splash;
