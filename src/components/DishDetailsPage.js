import React, { useEffect, useState } from 'react';
import '../assets/1.css';
import image3 from '../assets/image3.jpg';
import Group508 from '../assets/Group 508.png';

const DishDetailsPage = () => {
  const [dishData, setDishData] = useState(null);

  useEffect(() => {
    const fetchDishData = async () => {
      try {
        const response = await fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1');
        const data = await response.json();
        setDishData(data);
      } catch (error) {
        console.error('Error fetching dish data:', error);
      }
    };
    fetchDishData();
  }, []);

  if (!dishData) {
    return <div>Loading...</div>;
  }

  const renderIngredientGroups = () => {
    if (!dishData.ingredients) {
      return <div>No ingredients available</div>;
    }

    const ingredientEntries = Object.entries(dishData.ingredients).filter(([group]) => group !== "appliances");

    return ingredientEntries.map(([group, ingredients]) => (
      <div key={group} className="ingredients-group">
        <h3 className="ingredients-group-title">{group}</h3>
        <ul className="ingredients-list">
          {ingredients.map((ingredient) => (
            <li key={ingredient.name} className="ingredient-item">
              {ingredient.name}
              <span className="ingredient-value">{ingredient.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    ));
  };



  return (
    <>
 
    <div className="container">
        <div className="dish-info">
          <h1 className="dish-name">
            Masala Mughlai <span className="rating">4.2★</span>
          </h1>
          <p className="dish-description">Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</p>
          <div className="time">
            <i className="fa fa-clock-o"></i> {dishData.timeToPrepare}
          </div>
        </div>
        <div className="dish-image">
          <img src={image3} alt="Dish" />
        </div>
        
      </div>
      <div className="ingredients-container" >
        <h2 className="ingredients-title">Ingredients</h2>
        <p className="ingredients-subtitle">For 2 people</p>
        <div id="ingredients-groups">{renderIngredientGroups()}</div>
      </div>
      <div className="components-container">
      <div class="appliances-container">
        <h2 class="appliances-title">Appliances</h2>
        <div class="icon-container">
          <div class="icon">
            <img src={Group508} alt="Icon 1"/>
            <span>Refrigerator</span>
          </div>
          <div class="icon">
            <img src={Group508} alt="Icon 2"/>
            <span>Microwave</span>
          </div>
          <div class="icon">
            <img src={Group508} alt="Icon 3"/>
            <span>Stove</span>
          </div>
        </div>
      </div>
      </div>

      

      
    </>
  );
};

export default DishDetailsPage;