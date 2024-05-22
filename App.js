import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DishInfoComponent from './1.js';
import iconImage from 'D:/chefkart/react_project/chefkart_assignment/src/assets/Group 508.png';
import Header from './components/Header';
import FoodCategories from './components/foodcategories';
import PopularDishes from './components/populardishes';
import DishDetails from './components/dishdetails';
import Footer from './components/footer';
import DishDetailsPage from './components/DishDetailsPage';

function App() {
  const [popularDishes, setPopularDishes] = useState([]);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
      .then(response => response.json())
      .then(data => {
        setPopularDishes(data.popularDishes);
        setDishes(data.dishes);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
    <div>
      <Header />
      <FoodCategories />
      <PopularDishes popularDishes={popularDishes} iconImage={iconImage} />
      <Routes>
        <Route path="/" element={<DishDetails dishes={dishes} iconImage={iconImage} />} />
        <Route path="/dish-details" element={<DishDetailsPage />} /> {/* New route for DishDetailsPage */}
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
