import React, { useState } from 'react';
import * as S from './styles';

export default function BurgerMenu({ isMenuClicked, toggleNav }) {
  return (
    <S.BurgerMenu onClick={toggleNav}>
      <S.Bar isMenuClicked={isMenuClicked} />
      <S.Bar2 isMenuClicked={isMenuClicked} />
      <S.Bar3 isMenuClicked={isMenuClicked} />
    </S.BurgerMenu>
  );
}
