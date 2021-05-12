import React, { useEffect, useRef } from 'react';
import LinkBox from './LinkBox';

const linkList = [
  {
    id: 'id1',
    name: 'risk 1',
    description: 'risk description 1',
  },
  {
    id: 'id2',
    name: 'risk21',
    description: 'risk description 2',
  },
  {
    id: 'id3',
    name: 'risk 3',
    description: 'risk description 3',
  },
  {
    id: 'id4',
    name: 'risk 4',
    description: 'risk description 4',
  },
  {
    id: 'id11',
    name: 'risk 4',
    description: 'risk description 4',
  },
  {
    id: 'id5',
    name: 'risk 4',
    description: 'risk description 4',
  },
  {
    id: 'id6',
    name: 'risk 4',
    description: 'risk description 4',
  },
  {
    id: 'id7',
    name: 'risk 4',
    description: 'risk description 4',
  },
  {
    id: 'id8',
    name: 'risk 4',
    description: 'risk description 4',
  },
  {
    id: 'id9',
    name: 'risk 4',
    description: 'risk description 4',
  },
  {
    id: 'id10',
    name: 'risk 4',
    description: 'risk description 4',
  },
];
const Links = (props) => {
  let counter = 0;
  let index = 0;
  let myRef = useRef(null);
  let test;
  useEffect(() => {
    test = myRef.current.getBoundingClientRect().height;
    function getElementHeight() {
      console.log(
        'this is the test====> ' + myRef.current.getBoundingClientRect().height
      );
      return test;
    }
    function angleFor(index) {
      return ((2 * Math.PI) / Links.length) * index;
    }
    function coordinatesInSquare(tetha) {
      const x = getRadius * Math.cos(tetha);
      const y = getRadius * Math.sin(tetha);
      console.log(`x: ${x}  y${y}`);
      return { x: x, y: y };
    }
    function getRadius() {
      return getElementHeight() / 5;
    }
    function getOffset() {
      return getElementHeight() / 3.5;
    }
    function coordinates(theta) {
      const inSquare = coordinatesInSquare(theta);
      const x = getRadius + inSquare.x + getOffset();
      const y = getRadius - inSquare.y + getOffset();
      console.log(`x: ${x}  y${y}`);
      return { x, y };
    }
    function plotBox(index) {
      const theta = angleFor(index);
      const position = coordinates(theta);
      console.log(position);
    }
    console.log(plotBox(2));
  });

  return (
    <div className='container' ref={myRef}>
      {linkList.map(({ name, id, description }, index) => {
        counter = counter + 100;
        {
          /* console.log(plotBox(index++)); */
        }
        return (
          <LinkBox
            key={id}
            name={name}
            description={description}
            translateX={200 + counter}
          ></LinkBox>
        );
      })}
    </div>
  );
};

export default Links;
