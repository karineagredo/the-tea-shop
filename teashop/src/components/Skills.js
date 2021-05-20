import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMugHot,
  faGlassCheers,
  faBomb,
  faMortarPestle,
} from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faMugHot} />;
const Skills = (props) => {
  return (
    <section className='skills clearfix'>
      <article className='skill'>
        <span className='skill-icon'>{element}</span>
        <h4>Made in Australia</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deleniti blanditiis ad aliquam ea. Veritatis quis sit temporibus nobis
          eius!
        </p>
      </article>
      <article className='skill'>
        <span className='skill-icon'>
          <FontAwesomeIcon icon={faGlassCheers}></FontAwesomeIcon>
        </span>
        <h4>Relaxion</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deleniti blanditiis ad aliquam ea. Veritatis quis sit temporibus nobis
          eius!
        </p>
      </article>
      <article className='skill'>
        <span className='skill-icon'>
          <FontAwesomeIcon icon={faBomb} />
        </span>
        <h4>Energy</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deleniti blanditiis ad aliquam ea. Veritatis quis sit temporibus nobis
          eius!
        </p>
      </article>
      <article className='skill'>
        <span className='skill-icon'>
          <FontAwesomeIcon icon={faMortarPestle} />
        </span>
        <h4>Family Recipe</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deleniti blanditiis ad aliquam ea. Veritatis quis sit temporibus nobis
          eius!
        </p>
      </article>
    </section>
  );
};

export default Skills;
