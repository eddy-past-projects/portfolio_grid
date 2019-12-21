import React from 'react'
import Home from '../home/Home'
import Fake from '../fake/Fake'
import Splash from '../home/Splash'







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
    return (
        !this.state.timePassed ? <Splash/> :  <Home/>



    )

  }
}


export default SplashScreen



// }
