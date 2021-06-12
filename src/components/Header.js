import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-title">  <h1>Emirates Flight Booking App</h1></div>
     
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Search Flight
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Flight
        </NavLink>
        <NavLink to="/lists" className="link" activeClassName="active">
        Flights List
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
