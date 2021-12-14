import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  border: none;
  height: 2rem;
  border-radius: 8px;
  background: #48a1e1;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 5px 1rem;
  transition: all 0.2s;
  &: active {
    transform: translate(-1.4px, 2px);
  }
`;
