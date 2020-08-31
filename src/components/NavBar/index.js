import React, { useState } from 'react';
import * as S from './styles';
import BurgerMenu from '../buttons/BurgerMenu/index';

// Routing
import { NavLink } from 'react-router-dom';

// Svg
import NavSvg from '../../assets/svg/bg-pattern-mobile-nav.svg';

export default function NavBar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function toggleNav() {
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <S.Header isMenuClicked={isMenuClicked}>
      <S.LogoContainer>
        <NavLink to="/">The Calorie Police</NavLink>
      </S.LogoContainer>
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
