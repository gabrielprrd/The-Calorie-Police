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
  width: 98vw;

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
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
    padding-bottom: 20px;
    background: ${({ theme }) => theme.neutralThree};
    justify-content: center;
  }

  img {
    width: 2rem;
    margin-right: 10px;
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
