import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Projects } from 'model/projects';

import { List, Item } from './styles';

interface Props {
  content?: Projects[];
}

const ContentList = ({ content }: Props) => {
  return (
    <List>
      {content &&
        content.map((item) => (
          <Item>
            <Item.Image src={`/images/${item.picture}`} />
            <div>
              <Item.Title>{item.title}</Item.Title>
              <Item.Content>{item.description}</Item.Content>
              <Item.Anchor href={item.url}>
                <FiExternalLink />
                <Item.AnchorText>Find out more</Item.AnchorText>
              </Item.Anchor>
            </div>
          </Item>
        ))}
    </List>
  );
};

export default ContentList;
