import React from 'react';
import { CardContainer, CardHeader } from './styles';

interface Props {
  header?: string;
  children: JSX.Element;
}

const Card = ({ header, children }: Props) => {
  return (
    <CardContainer>
      <header>
        <CardHeader>{header}</CardHeader>
      </header>
      {children}
    </CardContainer>
  );
};

export default Card;
