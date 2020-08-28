import styled from 'styled-components';

interface StyledProps {
  percentage: string;
}

export const Bar: any = styled.div`
  position: relative;
  background: #e9eaea;
  height: 24px;
  margin-bottom: 12px;
`;

export const BarText: any = styled.div`
  display: flex;
`;

BarText.Name = styled.h4`
  flex: 1;
  color: #98a0a9;
`;

BarText.Rank = styled.span`
  font-size: 14px;
  align-self: center;
  color: #e9eaea;
`;

Bar.Progress = styled.span<StyledProps>`
  width: ${(props) => props.percentage};
  display: block;
  height: 100%;
  background-color: #69ca8f;
`;
