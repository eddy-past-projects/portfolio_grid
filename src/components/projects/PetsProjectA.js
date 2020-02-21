import React from 'react'
import pets from '../../assets/pets.jpg'






const PetsProject = () =>{

  return (
    <div className='solo-card'>
      <a href="https://adopt-a-pet.netlify.com/">
  <img src={pets} className='project-solo' alt='puppy'/> </a>






  <h3><br/>Adopt A Pet! is an app for adopting/maintaining a virtual pet without the upkeep of a live one • Persists each user to a Postgres database
    • Presently MVP, rebuilt from a Single Page Application with Javascript to React, Redux frontend and a Rails API
    • Employs flexbox with hamburger menu<br/>
  </h3>
</div>


  )
}

export default PetsProject
