import React, { useState } from 'react';
import * as S from './styles';

// Components
import BurgerMenu from '../buttons/BurgerMenu/index';

// Routing
import { NavLink } from 'react-router-dom';

// Svg
import NavSvg from '../../assets/svg/bg-pattern-mobile-nav.svg';

// icon
import logo from '../../assets/img/logo.png';

export default function NavBar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function toggleNav() {
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <S.Header isMenuClicked={isMenuClicked}>
      <NavLink to="/">
        <S.LogoContainer>
          <img src={logo} />
          <p>The Calorie Police</p>
        </S.LogoContainer>
      </NavLink>
      <S.NavBar onClick={toggleNav}>
        <S.NavLinksContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/diets">Search for diets</NavLink>
          <NavLink to="/meal-plan">Meal plans</NavLink>
          <NavLink to="/saved-recipes">Your recipes</NavLink>
        </S.NavLinksContainer>
        <S.SvgContainer>
          <img src={NavSvg} alt="background lines" />
        </S.SvgContainer>
      </S.NavBar>
      <BurgerMenu isMenuClicked={isMenuClicked} toggleNav={toggleNav} />
    </S.Header>
  );
}
