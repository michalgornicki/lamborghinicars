import React from 'react';
import './App.css';

function App() {
  return (
    <p>
      <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
    </p>
  );
}

export default App;
