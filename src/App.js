import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import './logo.css';
import Navbar from './components/navbar/Navbar'
import swirl_sm from './assets/swirl_sm.jpg'
import Projects from './components/projects/Projects'
import KayakProject from './components/projects/KayakProject'
import AbodeProject from './components/projects/AbodeProject'
import PetsProject from './components/projects/PetsProject'
import AboutMe from './components/aboutMe/AboutMe'
import Home from './components/homeAndBall/Home'


function App() {
  return (<div className='container'>
  <Route exact path='/' component={Home}/>

    <Navbar/>

    <div className="wrapper">
      <aside className="aside logo">
        <img src={swirl_sm} className="swirl swirlHome" alt="logo"/>

      </aside>
      <div className="main">

        <Route path='/projects' component={Projects}/>
        <Route path='/about-me' component={AboutMe}/>
        <Route path='/kayak' component={KayakProject}/>
        <Route path='/abode' component={AbodeProject}/>
        <Route path='/pets' component={PetsProject}/>
      </div>

    </div>
  </div>);
}

export default App;
