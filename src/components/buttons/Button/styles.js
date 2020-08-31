import styled from 'styled-components';

export const Button = styled.button`
  border: 3px solid ${({ theme }) => theme.primary};
  background: white;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.2s ease;
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 4px ${({ theme }) => theme.primary};
  }
`;
