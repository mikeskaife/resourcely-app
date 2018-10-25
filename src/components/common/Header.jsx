import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/" href="/">
      Home
    </Link>
    {' | '}
    <Link to="about" href="about">
      About
    </Link>
  </nav>
);

export default Header;
