import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    backgroundColor: '#222',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
  },
  cartLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 18,
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <h1><Link to="/" style={styles.logo}>MyShop</Link></h1>
      <nav>
        <Link to="/cart" style={styles.cartLink}>🛒 Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
