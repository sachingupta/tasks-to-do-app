import React from 'react';
import { Link } from 'react-router-dom';
export const Nav = () => {
    return  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/location">Location</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/collection">Collection</Link></li>
  </ul>
}