import React from 'react';
import 'D:/chefkart/react_project/chefkart_assignment/src/assets/styles.css';
const Header = () => {
  return (
    <>
      <h3 className="heading">Select Dishes</h3>
      <div className="container">
        <div className="header">
          <div className="date-container">
            <input type="date" className="date-input" name="date" value="2024-05-11" />
          </div>
          <div className="time-container">
            <input type="time" className="time-input" name="time" value="12:00" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;