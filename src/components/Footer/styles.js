import styled from 'styled-components';
import device from '../../assets/globalStyles/device';

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  z-index: 1 !important;
  height: 200px;
  width: 100vw;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
  }
`;

export const UpperDiv = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  @media ${device.mobileL} {
    margin-bottom: 20px;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;

  img {
    margin: 0 20px;
  }
`;

export const CreditsDiv = styled.div`
  align-self: center;
  margin-top: 70px;

  @media ${device.mobileL} {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;
