import styled from 'styled-components';

export const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  input {
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    z-index: 3;
  }

  &:focus-within {
    label {
      color: ${({ theme }) => theme.secondary};
      transition: 0.2s linear;
      transform: translateY(-5px);
      transform: scale(-5px);
    }
  }
`;

export const FormFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormOutterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
