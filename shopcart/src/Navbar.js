import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = ({ products }) => {
  const total = products.reduce((acc, product) => acc + parseInt(product.value || 0), 0);

  return (
    <BootstrapNavbar bg="light">
      <BootstrapNavbar>
        <Link to="/">Shop To React</Link>
      </BootstrapNavbar>
      <Nav>
        <Link to="/cart" className="nav-link">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /> {total} Items
        </Link>
      </Nav>
    </BootstrapNavbar>
  );
}

export default Navbar;
