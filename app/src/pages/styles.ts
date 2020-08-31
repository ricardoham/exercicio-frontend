import styled from 'styled-components';

export const MainContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap; */
`;

export const Content = styled.div`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  display: flex;
`;

export const Aside = styled.div`
  @media only screen and (max-width: 768px) {
    min-width: 0;
  }
  min-width: 400px;
`;
