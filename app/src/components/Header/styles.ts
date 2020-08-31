import styled from 'styled-components';

export const HeaderContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 18px 24px;
  background-color: #f5f5f5;
  border-top: 10px solid #778491;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const HeaderPhoto = styled.img`
  width: 10rem;
  height: 10rem;
  border: 4px solid #778491;
  border-radius: 50%;
`;

export const StyledHeader: any = styled.header`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    align-items: center;
  }
  margin-left: 18px;
`;

StyledHeader.Title = styled.h1`
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
  color: #49515c;
  font-weight: 600;
`;

StyledHeader.Subtitle = styled.h3`
  color: #98a0a9;
  font-weight: 200;
`;

StyledHeader.IconList = styled.div`
  display: flex;
`;
