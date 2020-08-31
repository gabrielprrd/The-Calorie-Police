import React from 'react';
import * as S from './styles';

// Icons
import facebookIcon from '../../assets/svg/icon-facebook.svg';
import instagramIcon from '../../assets/svg/icon-instagram.svg';
import pinterestIcon from '../../assets/svg/icon-pinterest.svg';
import twitterIcon from '../../assets/svg/icon-twitter.svg';
import logo from '../../assets/img/logo.png';

import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <S.Footer>
      <S.UpperDiv>
        <S.LogoContainer>
          <NavLink to="/">
            <S.LogoContainer>
              <img src={logo} alt="logotype" />
              <p>The Calorie Police</p>
            </S.LogoContainer>
          </NavLink>
        </S.LogoContainer>
        <S.SocialIconsContainer>
          <a href="https://github.com/gabrielprrd">
            <img src={facebookIcon} alt="facebook icon" />
          </a>
          <a href="https://github.com/gabrielprrd">
            <img src={instagramIcon} alt="instagram icon" />
          </a>
          <a href="https://github.com/gabrielprrd">
            <img src={pinterestIcon} alt="pinterest icon" />
          </a>
          <a href="https://github.com/gabrielprrd">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
        </S.SocialIconsContainer>
      </S.UpperDiv>
      <S.CreditsDiv>
        <p>
          Developed with ❤ by{' '}
          <a href="https://github.com/gabrielprrd">Gabriel Afonso</a>
        </p>
      </S.CreditsDiv>
    </S.Footer>
  );
}
