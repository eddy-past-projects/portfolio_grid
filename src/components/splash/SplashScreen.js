import React from 'react';
import Home from '../home/Home';
import Splash from './Splash';

class SplashScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: window.innerWidth,
			timePassed: false
		};
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
		setTimeout(() => {
			this.setTimePassed();
		}, 5000);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	setTimePassed() {
		this.setState({
			timePassed: true
		});
	}

	render() {
		// let isMobile;
		// let width = this.state.width;
		// width <= 500 ? (isMobile = true) : (isMobile = false);

		return !this.state.timePassed ? <Splash /> : <Home />;
	}
}

export default SplashScreen;

// return !this.state.timePassed && !isMobile ?
