import React from 'react';
import { PlaceHolderLoading, ImageLoading } from './styles';

const Loader = () => {
  return (
    <>
      {Array.from(Array(3)).map((_, index: number) => (
        <PlaceHolderLoading key={index} />
      ))}
      <ImageLoading />
    </>
  );
};

export default Loader;
