import styled from 'styled-components';

export const ListContainer = styled.section``;

export const List: any = styled.ul`
  margin: 24px 0;
`;

export const Item: any = styled.li`
  display: flex;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

Item.Image = styled.img`
  margin-right: 12px;
`;

Item.Title = styled.h4``;

Item.Content = styled.p``;

Item.Anchor = styled.a`
  color: #53b076;
`;

Item.AnchorText = styled.span`
  margin-left: 8px;
`;
