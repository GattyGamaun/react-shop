import React from 'react';
import PropTypes from 'prop-types';
import './_style.scss';
import Product from "../../components/product";

const ProductPage = ({product, history}) => {
  if (!product) return null;
  return (
    <section className="product-detail">
      <h2>Product Detail Page</h2>
      <article>
        <figure>
          <img src={product.imgUrl} alt={product.alt}/>
        </figure>
        <div>
          <h3>{product.name}</h3>
          <p>Article: {product.id}</p>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <button
            className="btn btn-outline-secondary btn-sm m-2"
            onClick={() => history.push('/catalog')}
          >
            Back
          </button>
        </div>
      </article>
    </section>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })
};

export default ProductPage;
