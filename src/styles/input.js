import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  border: 2px solid #48a1e1;
  height: 2rem;
  width: 25rem;
  background: #e9e8bb73;
  border-radius: 8px;
  padding: 0 5px;
  &:focus {
    border: 2px solid rgb(0 17 255 / 87%);
  }
`;
