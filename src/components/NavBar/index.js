import React from 'react';
import * as S from './styles';

// Routing
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <p>The Calorie Police</p>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/diets">Search for diets</NavLink>
        <NavLink to="/meal-plan">Meal plans</NavLink>
        <NavLink to="/saved-recipes">Your recipes</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
