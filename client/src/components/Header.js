import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
       <nav>
            <ul className="nav justify-content-center nav-fill">
                <li className="nav-item">
                  <Link to ="/search" className="nav-link nav-links black">Search</Link>
                </li>
                <li className="nav-item title"><Link to = "/" className="nav-link black">Discover</Link></li>
                <li className="nav-item">
                {Auth.loggedIn() ? (
            <>
          
              <Link to="/savedjobs" className="nav-link nav-links black">Saved Jobs</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link nav-links black">Login</Link>
              <Link to="/signup" className="nav-link nav-links black">Signup</Link>
            </>
          )}
                </li>
              </ul>
        </nav>
    </header>
  );
};

export default Header;
