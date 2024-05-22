import React from 'react';
import 'D:/chefkart/react_project/chefkart_assignment/src/assets/styles.css';
const PopularDishes = ({ popularDishes, iconImage }) => {
  return (
    <>
      <div className="background1">
        <div className="container2">
          <p>Popular Dishes</p>
        </div>
        <div className="token-container">
          {popularDishes.map((dish) => (
            <div key={dish.id} className="popular-dish">
              <img src={dish.image} alt={`${dish.name} Image`} className="popular-dish-image" />
              <span className="popular-dish-name">{dish.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularDishes;