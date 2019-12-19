import React from 'react'
import abode from '../../assets/abode.jpg'

const AbodeProject = () => {

  return (<div className='solo-card'>
  <a href="https://abodehaven.herokuapp.com/">
 <img src={abode} className='project-solo' alt='city at night'/></a>

      <h3><strong>Abode Haven</strong> is an app for Abode Haven's building management admin and their apartment seekers based in nyc.
      • Admin can add, update, delete buildings and apartments based on availibility.
      • Apartment seekers can view all available apartments.<br/>
        Built with Ruby on Rails, Postgres, Bootstrap and CSS
      </h3>
    </div>

  )
}

export default AbodeProject
