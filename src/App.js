// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';

function App() {
  const imagePaths = [
    '/profile1.jpg',
    '/profile2.jpg',
    '/profile3.jpg',
    '/profile4.jpg',
    '/profile5.jpg',
    '/profile6.jpg',
  ];

  return (
    <div>
      <NavBar />
      <div style={{ marginLeft: '250px', padding: '80px' }}>
        {/* Your other components/content go here */}
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: '250px',
          right: '170px',
          textAlign: 'right',
          zIndex: '1',
        }}
      >
        <UserProfile imagePaths={imagePaths} />
      </div>
    </div>
  );
}

export default App;
