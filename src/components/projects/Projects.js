import React from 'react'
import kayaksWh from '../../assets/kayaksWh.jpg'
import pets from '../../assets/pets.jpg'
import { Link } from 'react-router-dom'
import abode from '../../assets/abode.jpg'
import './Projects.css'




class Projects extends React.Component {

  render(){




  return (
    <div className='text'>
    <div className='cards'>



          <Link to='/kayak'><img src={kayaksWh} className='project-card' alt=''/></Link>
          <Link to='/pets'><img src={pets} className='project-card' alt=''/></Link>
          <Link to='/abode'><img src={abode} className='project-card' alt=''/></Link>

</div>

      </div>
  )
}
}



export default Projects
