import React from 'react'
import Home from '../home/Home'
import Splash from './Splash'







class SplashScreen extends React.Component {
  constructor(props) {
    super(props);




    this.state = {
      timePassed: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 4500);
  }

  setTimePassed() {
    this.setState({
      timePassed: true
    });
  }



  render() {




    )

  }
}


export default SplashScreen



// }
