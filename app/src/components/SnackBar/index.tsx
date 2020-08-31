import React, { useEffect } from 'react';
import { SnackBarContainer } from './styles';

export interface SnackBarProps {
  randomId?: string;
  text: string;
  remove?: () => void;
}

const SnackBar = ({ text, remove }: SnackBarProps) => {
  useEffect(() => {
    const snackId = setTimeout(() => {
      remove && remove();
    }, 3000);
    return () => clearTimeout(snackId);
  }, []);

  return <SnackBarContainer>{text}</SnackBarContainer>;
};

export default SnackBar;
