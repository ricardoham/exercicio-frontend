import styled from 'styled-components';

export const ListContainer = styled.section``;

export const List: any = styled.ul`
  margin: 24px 0;
`;

export const Item: any = styled.li`
  display: flex;
  margin-bottom: 24px;
  width: 800px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

Item.Image = styled.img`
  height: 225px;
  margin-right: 12px;
  @media only screen and (max-width: 600px) {
    margin-right: 0;
    width: 800px;
    height: 333px;
  }
`;

Item.Title = styled.h4``;

Item.Content = styled.p``;

Item.Anchor = styled.a`
  color: #53b076;
`;

Item.AnchorText = styled.span`
  margin-left: 8px;
`;
