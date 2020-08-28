import React from 'react';
import { Bar, BarText } from './styles';

interface Props {
  name: string;
  percentage: string;
  rank: string;
}

const ProgressBar = ({ name, percentage, rank }: Props) => {
  return (
    <>
      <BarText>
        <BarText.Name>{name}</BarText.Name>
        <BarText.Rank>{rank}</BarText.Rank>
      </BarText>
      <Bar>
        <Bar.Progress percentage={percentage} />
      </Bar>
    </>
  );
};

export default ProgressBar;
