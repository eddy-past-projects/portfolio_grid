import React from 'react'
import pets from '../../assets/pets.jpg'






const PetsProject = () =>{

  return (
    <div className='solo-card'>
      <a href="https://adopt-a-pet.netlify.com">
  <img src={pets} className='project-solo' alt='puppy'/> </a>






  <h3><br/>an app for adopting/maintaining a virtual pet without the upkeep of a live one • Persists each user's pets and experience to a Postgres database
    • Employs a Single Page Application with Javascript and CSS <br/>
  – work in progress –
  </h3>
</div>


  )
}

export default PetsProject

// <a href="https://pets-frontendtoo.herokuapp.com">
