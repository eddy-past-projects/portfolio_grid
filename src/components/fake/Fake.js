import React from 'react'
import Home from '../home/Home'
import SplashScreen from '../splash/SplashScreen'






class Fake extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      timePassed: true
    };
  }
  setTimePassed() {
    this.setState({
      timePassed: false
    });
  }




  render() {
    return (
      <div>
      
      </div>



    )

  }
}
export default Fake
