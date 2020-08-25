import React from 'react';
import { StyledBtn } from './styles';

interface Props {
  color: 'primary' | 'secondary';
  text?: string;
  children?: JSX.Element;
  icon?: string;
  iconedBtn?: boolean;
  onClick: () => void;
}

const Button = ({ color, text, children, icon, iconedBtn, onClick }: Props) => {
  return (
    <StyledBtn color={color} onClick={onClick}>
      {text || children}
    </StyledBtn>
  );
};

export default Button;
