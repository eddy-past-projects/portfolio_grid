import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='navBar'>
        <div className='column'>
          Some Text in Column One
        </div>
      </div>
    <div className='some-page-wrapper'>

  <div className='row 2'>
    <div className='column'>
      <div className='green-column'>
        Some Text in Row 2, Column One
      </div>
    </div>
    <div className='double-column'>
      <div className='orange-column'>
        Some Text in Row 2, Column Two
      </div>
    </div>

  </div>

  <div className='footer'>
    <div className='column'>
      <div className='blue-column'>
        Some Text in Row 2, Column One
      </div>
    </div>


  </div>
</div>
  </div>
  );
}

export default App;
