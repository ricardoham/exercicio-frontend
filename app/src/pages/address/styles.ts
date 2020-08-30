import styled from 'styled-components';

interface StyledProps {
  isLink?: boolean;
}

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span<StyledProps>`
  margin-left: 8px;
  color: ${(props) => (props.isLink ? '#53b076' : '#989898')};
`;
