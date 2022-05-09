import styled from 'styled-components';

export const SearchWrapperStyled = styled.div`
  width: 100%;
  margin-bottom: 8rem;

  input {
    width: 100%;
    border: none;
    border-bottom: 2px solid #000;
    height: 3rem;
    font-size: 1.5rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #cecece;
      font-size: 1rem;
    }
  }
`;

export const LoadingWrapper = styled.div`
  height: 2rem;
  color: grey;
`;

export const ErrorWrapper = styled.div`
  font-size: 1rem;
  color: red;
  min-height: 2rem;
`;