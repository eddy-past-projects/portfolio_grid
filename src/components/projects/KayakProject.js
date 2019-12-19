import React from 'react'
import kayaksWh from '../../assets/kayaksWh.jpg'






const KayakProject = () =>{

  return (
    <div className='solo-card'>
      <a  href="https://kayaking-frontend.herokuapp.com/">
    <img src={kayaksWh} className='project-solo' alt='kayak'/> </a>








<h3>an app for kayakers to log and make comments on past trips and create upcoming ones
• Persists data to a Rails database and provides a Rails API
• Displays a React, Redux frontend with Semantic-ui-React
• Fetches data from the Rails API using Javascript<br/>
– work in progress –</h3>
</div>



  )
}

export default KayakProject
