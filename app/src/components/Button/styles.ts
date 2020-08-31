import styled from 'styled-components';

interface StyledProps {
  color: 'primary' | 'secondary';
}

export const StyledBtn = styled.button<StyledProps>`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 500;
  color: #fff;
  font-size: 1rem;
  background-color: ${(props) => (props.color === 'primary' ? '#57b952' : '#4A9FC6')};
  text-transform: uppercase;
  & > svg {
    font-size: 1.4rem;
    vertical-align: bottom;
    margin-right: 8px;
  }
`;
