import React from 'react';
import 'D:/chefkart/react_project/chefkart_assignment/src/assets/styles.css';
const FoodCategories = () => {
  return (
    <div className="container1">
      <div className="button-container">
        <button className="slide-btn">Italian</button>
      </div>
      <div className="button-container">
        <button className="slide-btn">Indian</button>
      </div>
      <div className="button-container">
        <button className="slide-btn">Indian</button>
      </div>
      <div className="button-container">
        <button className="slide-btn">Indian</button>
      </div>
      <div className="button-container">
        <button className="slide-btn">Indian</button>
      </div>
      {/* Add more button-container divs for additional categories */}
    </div>
  );
};

export default FoodCategories;