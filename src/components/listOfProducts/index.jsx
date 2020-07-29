import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import './_style.scss';

const ListOfProducts = ({ onIncrement, onDecrement, products }) => {
  return (
    <Fragment>
      <h2 className="m-4">Category of products</h2>
      <div className="list-of-products">
        {products.length === 0 && <p>There is no products</p>}
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    </Fragment>
  );
};

ListOfProducts.propTypes = {
  products: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default ListOfProducts;
