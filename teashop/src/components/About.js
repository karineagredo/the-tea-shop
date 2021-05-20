import React from 'react';
import about from '../images/about.jpeg';
const About = (props) => {
  return (
    <section className='about-section clearfix'>
      <article className='about-article '>
        <div className='img-container'>
          <img src={about} alt='tea pot' className='about-pic' />
        </div>
      </article>
      <article className='about-article section-info'>
        <h3>About our</h3>
        <h2 className='section-title'>Tea Station</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          consequuntur atque rerum beatae veniam voluptatibus totam nostrum,
          minus placeat aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          consequuntur atque rerum beatae veniam voluptatibus totam nostrum,
          minus placeat aut?
        </p>
        <button className='btn'>learn more</button>
      </article>
    </section>
  );
};

export default About;
