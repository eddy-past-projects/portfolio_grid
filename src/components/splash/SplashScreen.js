import React from 'react'
import Home from '../home/Home'
import Fake from '../fake/Fake'






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
    }, 3000);
  }

  setTimePassed() {
    this.setState({
      timePassed: true
    });
  }


  render() {
    return (!this.state.timePassed) ? <Home/> :  <Fake/>

  }
}


export default SplashScreen


// if (!this.state.timePassed) {
//   return <Home / > ;
// } else {
//   (this.state.timePassed)
//   return <Fake / > ;
// }
// }
// }
