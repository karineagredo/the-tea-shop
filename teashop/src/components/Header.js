import React from 'react';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='banner'>
        <h2>Over one hundred flavors of</h2>
        <h1>
          specially <br /> crafted tea
        </h1>
        <button className='btn banner-btn'>explore</button>
      </div>
    </header>
  );
};

export default Header;
