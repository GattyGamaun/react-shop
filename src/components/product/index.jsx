import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Counter from '../counter';
import './_style.scss';

const Product = ({ onIncrement, onDecrement, product }) => {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <img src={product.imgUrl} alt={product.alt} />
        <h4 className="m-3">{product.name}</h4>
      </Link>
      <span className="badge p-2">${product.price}</span>
      <Counter
        product={product}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    imgUrl: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Product;
