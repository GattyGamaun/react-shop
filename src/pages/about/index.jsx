import React from 'react';
import { about } from '../../data';

const About = () => {
  return (
    <section>
      <h2>{about.us.title}</h2>
      <p>{about.us.text}</p>
      <h3>{about.deal.title}</h3>
      <p>{about.deal.text}</p>
      <h3>{about.advantages.title}</h3>
      <p>{about.advantages.text}</p>
    </section>
  );
};

export default About;
