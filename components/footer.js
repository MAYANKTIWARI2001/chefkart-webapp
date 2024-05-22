import React from 'react';
import 'D:/chefkart/react_project/chefkart_assignment/src/assets/styles.css';
const Footer = () => {
  return (
    <div className="container" style={{ marginTop: '-17px' }}>
      <footer className="text-center text-lg-start" style={{ backgroundColor: '#ffd500' }}>
        <div className="text-center text-black p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright:
          <a
            className="text-black"
            href="https://anshushrivastava67.github.io/portfolio.github.io/"
            style={{ textDecoration: 'none' }}
          >
            Anshu Shrivastava Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;