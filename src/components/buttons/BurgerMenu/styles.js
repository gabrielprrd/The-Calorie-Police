import styled from 'styled-components';
import device from '../../../assets/globalStyles/device';

export const BurgerMenu = styled.div`
  display: none;
  z-index: 2 !important;
  cursor: pointer;
  background: ${({ theme }) => theme.primary};
  padding: 10px;

  @media ${device.mobileL} {
    display: inline-block;
    position: fixed;
    bottom: 15px;
    right: 15px;
  }
`;

export const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: ${({ theme }) => theme.neutralThree};
  margin: 6px 0;
  transition: 0.4s;
  transform: ${({ isMenuClicked }) =>
    isMenuClicked ? 'rotate(-45deg) translate(-9px, 6px)' : 'none'};
  z-index: 99;
`;

export const Bar2 = styled(Bar)`
  transform: none;
  opacity: ${(props) => (props.isMenuClicked ? 0 : 1)};
`;

export const Bar3 = styled(Bar)`
  transform: ${({ isMenuClicked }) =>
    isMenuClicked ? 'rotate(45deg) translate(-8px, -8px)' : 'none'};
`;
