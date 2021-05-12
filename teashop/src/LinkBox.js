import React from 'react';

const LinkBox = ({ name, id, translateX = 0, translateY = 200 }) => {
  const styles = `transform: 'translateX(200px)'`;
  //   console.log({ transform: 'translateX(200px)' });
  //   ${translateX}px, ${translateY}px)
  return (
    <div
      className='linkBox'
      style={{ transform: `translate(${translateX}px, ${translateY}px)` }}
    >
      {name}
    </div>
  );
};

export default LinkBox;
