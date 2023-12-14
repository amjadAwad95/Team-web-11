// ClickableImage.js
import React from 'react';

const ClickableImage = ({ imagePath, onClick }) => {
  return (
    <img
      src={imagePath}
      alt="Profile"
      className="rounded-circle clickable-image"
      onClick={onClick}
    />
  );
};

export default ClickableImage;
