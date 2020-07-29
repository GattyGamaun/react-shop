import React from 'react';
import PropTypes from 'prop-types';
import ListOfProducts from '../listOfProducts';
import { home } from '../../data';

const Home = ({ onIncrement, onDecrement, products }) => {
  return (
    <section>
      <h2>{home.title}</h2>
      <p>{home.text}</p>
      <ListOfProducts
        products={products}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </section>
  );
};

Home.propTypes = {
  products: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Home;
