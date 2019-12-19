// import React from 'react'
// // import * as d3 from 'd3'
// import './Home.css'
//
//
//
//
// const Ball = ({
//   x,
//   y
// }) => ( <
//   circle cx = {
//     x
//   }
//   cy = {
//     y
//   }
//   r = {
//     70
//   }
//   />
// );
//
// let MAX_H = 750;
//
// class BounceBall extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       y: -80,
//       vy: 30
//     }
//   }
//
//   // componentDidMount() {
//   //   this.timer = d3.timer(() => this.gameLoop());
//   //   this.gameLoop();
//   // }
//   //
//   // componentWillUnmount() {
//   //   this.timer.stop();
//   // }
//
//
//
//   // gameLoop() {
//   //   let {
//   //     y,
//   //     vy
//   //   } = this.state;
//   //   if (y > MAX_H) {
//   //     // vy = -vy*.87;
//   //     vy = -vy * .8;
//   //   }
//   //
//   //   this.setState({
//   //     y: y + vy,
//   //     vy: vy + 0.4
//   //   })
//   //
//   // }
//
//
//
//
//   render() {
//     return ( <
//       div className = 'home-image' >
//       <
//       svg width = "68%"
//       height = {
//         600
//       } >
//
//
//
//       <
//       Ball x = {
//         140
//       }
//       y = {
//         this.state.y
//       }
//       /> <
//       /svg>
//       <
//       /div>
//
//     )
//   }
// }
// export default BounceBall
