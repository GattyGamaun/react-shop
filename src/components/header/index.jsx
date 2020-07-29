import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './_style.scss';

class Header extends Component {
  render() {
    const { totalPrice, onReset } = this.props;
    return (
      <header className="bg-light">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              Bower
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/catalog">
                    Catalog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contacts">
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link className="navbar-brand" to="#2">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className={this.getBadgeColor()}>${totalPrice}</span>
            </Link>
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
              Reset
            </button>
          </nav>
        </div>
      </header>
    );
  }

  getBadgeColor = () => {
    const { totalPrice } = this.props;
    const color = 'badge badge-pill m-2';
    return totalPrice === 0
      ? `${color} badge-secondary`
      : `${color} badge-danger`;
  };
}

Header.propTypes = {
  onReset: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Header;
