import styled from 'styled-components';
import device from '../../assets/globalStyles/device';

export const IntroContainer = styled.div`
  background: ${({ theme }) => theme.primary};
  width: 100%;
  padding: 40px;
  display: flex;
  position: relative;
  align-items: center;

  @media ${device.mobileL} {
    width: 100vw;
    padding: 0;
    flex-direction: column-reverse;
  }
`;
export const ManRunningImg = styled.img`
  width: 50vw;
  right: 30px;

  @media ${device.mobileL} {
    width: 90vw;
    padding: 40px 20px 20px 20px;
  }
`;

export const TextContainer = styled.div`
  color: ${({ theme }) => theme.secondary};

  display: flex;
  flex-direction: column;
  width: 50%;

  @media ${device.mobileL} {
    width: 100vw;
    padding: 30px;
  }

  p {
    margin-bottom: 10px;
  }
`;

export const IntroPatternLeftDesktop = styled.img`
  position: absolute
  left: 0;
  bottom: -60px;
  width: 10vw;

  @media ${device.mobileL} {
    width: 25vw;
  }
`;

export const IntroPatternRightDesktop = styled.img`
  position: absolute
  right: 0;
  top: -30px;
  width: 25vw;

  @media ${device.mobileL} {
    width: 35vw;
  }
`;

export const Card = styled.div`
  margin: 30px 80px;
  padding: 60px;
  border: 4px solid ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;

  h1 {
    align-self: center;
    font-size: 2em;
    text-transform: uppercase;
  }
`;
