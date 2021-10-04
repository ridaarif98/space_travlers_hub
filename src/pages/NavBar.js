import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/mission',
      text: 'Mission',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'MyProfile',
    },
  ];
  return (
    <nav>
      <h1> Space Travlers Hub</h1>
      <ul>
        {links.map((link) => (<li key={link.id}><Link to={link.path}>{link.text}</Link></li>))}
      </ul>
    </nav>
  );
};
export default Navbar;
