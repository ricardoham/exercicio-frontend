import React from 'react';
import { Iconed } from './styles';

interface Props {
  children: JSX.Element;
  url: string;
}

const IconedButton = ({ children, url }: Props) => {
  return <Iconed href={url}>{children}</Iconed>;
};

export default IconedButton;
