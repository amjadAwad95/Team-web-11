import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    // Set initial image paths manually
    setImagePaths([
      '/ziza.jpg',
      '/ziza2.jpg',
      '/ziza1.jpg',
      '/ziza6.jpg',
      '/ziza3.jpg', // Move profile2.jpg to the end
    ]);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '-170px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginRight: '-370px' }}>
        <h2 style={{ marginRight: '70px' }}>Photos</h2>
        <button
          style={{
            backgroundColor: 'lightblue',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          See All Photos
        </button>
      </div>

      <div style={{ display: 'flex', marginBottom: '10px' }}>
        {/* Display first row with 2 images */}
        {imagePaths.slice(0, 2).map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`Profile ${index + 1}`}
            style={{ width: '150px', height: '150px' }}
          />
        ))}
      </div>
      
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        {/* Display second row with 3 images */}
        {imagePaths.slice(2, 5).map((path, index) => (
          <img
            key={index + 2}
            src={path}
            alt={`Profile ${index + 3}`}
            style={{ width: '150px', height: '110px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;