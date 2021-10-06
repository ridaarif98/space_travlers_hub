import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';
import image from '../img/planet.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
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
      <div className="d-flex">
        <img src={image} className="logo mr-2" alt="planet" />
        <p className="h1"> Space Travlers Hub</p>
      </div>
      <ul className="">
        {links.map((link) => (
          <li className="nav-item" key={link.id}>
            <Link className="nav-link" to={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
