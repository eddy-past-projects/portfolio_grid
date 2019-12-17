import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container'>

      <ul className='navBar'>
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Products</a></li>
  <li><a href="#">Contact</a></li>
</ul>


    

    <div className="wrapper">
  <header className="header">Header</header>
  <aside className="aside aside-1">Aside 1</aside>
  <article className="main">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </article>

  <footer className="footer">Footer</footer>
</div>
</div>

  );
}

export default App;
