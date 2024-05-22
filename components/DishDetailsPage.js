import React, { useEffect } from 'react';
import '../assets/1.css';
import { fetchDishData } from '../assets/1.js';

const DishDetailsPage = () => {
  useEffect(() => {
    fetchDishData();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="dish-info">
          <h1 className="dish-name">
            Masala Mughlai <span className="rating">4.2★</span>
          </h1>
          <p className="dish-description">
            Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.
          </p>
          <div className="time"></div>
        </div>
        <div className="dish-image">
          <img src="/image3.jpg" alt="Dish3" style={{ background: 'none' }} />
        </div>
      </div>
      <div className="ingredients-container">
        <h2 className="ingredients-title">Ingredients</h2>
        <p className="ingredients-subtitle">For 2 people</p>
        <div id="ingredients-groups"></div>
      </div>
      <div className="appliances-container">
        <h2 className="appliances-title">Appliances</h2>
      </div>

      <div className="icon-container">
        <div className="icon">
          <img src="/Group508.png" alt="Icon 1" />
          <span>Refrigerator</span>
        </div>
        <div className="icon">
          <img src="/Group508.png" alt="Icon 2" />
          <span>Microwave</span>
        </div>
        <div className="icon">
          <img src="/Group508.png" alt="Icon 3" />
          <span>Stove</span>
        </div>
      </div>
    </div>
  );
};

export default DishDetailsPage;