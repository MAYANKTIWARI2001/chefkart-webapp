import React from 'react';
import '../assets/styles.css';
import { Link } from 'react-router-dom';
const DishDetails = ({ dishes, iconImage }) => {
  return (
    <>
      <div className="background1">
        <div className="container2">
          <p>Recommended</p>
        </div>
        <div className='scroll'>
        <div className="container3">
          {dishes.map((dish) => (
            <div key={dish.id} className="dish-details">
              <div className="image-container">
                <img src={dish.image} alt="Dish Image" className="dish-image" />
              </div>
              <div className="details-container">
                <h2 className="dish-name">{dish.name}</h2>
                <div className="rating-container">
                  <span className="rating">{dish.rating}★</span>
                </div>
                <div className="ingredients">
                  <div className="icon-container">
                    {Array.from(new Set(dish.equipments)).map((equipment, index) => (
                      <div key={index} className="icon-container">
                        <img src={iconImage} alt="Icon" className="icon" />
                        <span>{equipment}</span>
                      </div>
                    ))}
                  </div>
                  {/* {dish.equipments.join(', ')} */}
                </div>
                <p className="description">{dish.description}</p>
                <Link to="/dish-details">
                <button className="add-btn">Add</button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default DishDetails;