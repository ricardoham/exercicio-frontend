import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% { opacity: 0 }
  30%, 50%, 100% { opacity: 1 }
`;

export const SnackBarContainer = styled.div`
  position: fixed;
  width: 200px;
  padding: 8px 24px;
  background-color: #333333;
  color: #9c73d5;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 4px;
  text-align: center;
  opacity: 1;
  transition: opacity 2s linear;
  animation: ${animation} 3s;
`;
