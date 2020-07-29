import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class Counter extends Component {
  styles = {
    fontSize: 14,
    fontWeight: 'bold',
  };

  render() {
    const { onIncrement, onDecrement, product } = this.props;
    const { total, quantity } = this.props.product;
    return (
      <Fragment>
        <div>
          <span style={this.styles} className={this.changeBadgeColor()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => onIncrement(product)}
            className="btn btn-dark btn-sm m-1"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            onClick={() => onDecrement(product)}
            className="btn btn-dark btn-sm m-1"
            disabled={quantity === 0}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div className={this.changeColorTotalBadge()}>
          <span>Total: {total}</span>
        </div>
      </Fragment>
    );
  }

  changeColorTotalBadge() {
    const { total } = this.props.product;
    return total !== 0 ? 'badge badge-primary m-2 p-2' : 'badge m-2 p-2';
  }

  changeBadgeColor() {
    const { quantity } = this.props.product;
    return quantity !== 0 ? 'badge m-2 badge-warning' : null;
  }

  disableButton() {
    const { quantity } = this.props.product;
    return quantity === 0 ? 'disabled' : null;
  }

  formatCount() {
    const { quantity } = this.props.product;
    return quantity === 0 ? (
      <span className="m-2">Add</span>
    ) : (
      <span className="m-2">{quantity}</span>
    );
  }
}

Counter.propTypes = {
  product: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }),
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
