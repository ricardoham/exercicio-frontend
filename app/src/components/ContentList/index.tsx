import React from 'react';
import { Projects } from 'model/projects';

import { List, Item } from './styles';

interface Props {
  content: Projects[];
}

const ContentList = ({ content }: Props) => {
  return (
    <List>
      {content.map((item) => (
        <Item>
          <Item.Image>{item.picture}</Item.Image>
          <Item.Title>{item.title}</Item.Title>
          <Item.Content>{item.description}</Item.Content>
          <Item.Anchor>{item.url}</Item.Anchor>
        </Item>
      ))}
    </List>
  );
};

export default ContentList;
