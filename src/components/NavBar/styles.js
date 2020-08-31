import styled from 'styled-components';
import device from '../../assets/globalStyles/device';

export const Header = styled.header`
  background: ${({ theme }) => theme.neutralThree};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 2;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.neutralOne};
    padding: 0 10px;
  }

  @media ${device.mobileL} {
    position: fixed;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    padding: 0;
    bottom: ${({ isMenuClicked }) => (isMenuClicked ? '0' : '-100%')};
    background: ${({ theme }) => theme.primary};
    transition: 0.4s;
  }
`;

export const LogoContainer = styled.div`
  @media ${device.mobileL} {
    width: 100vw;
    padding: 20px;
    background: ${({ theme }) => theme.neutralThree};
  }
`;

export const NavBar = styled.nav`
  display: flex;

  @media ${device.mobileL} {
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    flex: 1;
    width: 100vw;
  }
`;

export const NavLinksContainer = styled.div`
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50vh;
    a {
      color: ${({ theme }) => theme.neutralThree};
      font-size: 20px;
    }
  }
`;

export const SvgContainer = styled.div`
  display: none;

  @media ${device.mobileL} {
    display: flex;

    img {
      width: 100vw;
    }
  }
`;
