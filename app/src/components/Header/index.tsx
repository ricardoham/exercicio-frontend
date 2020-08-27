import React from 'react';
import { socialBtn } from 'utils/contants';
import IconedButton from 'components/IconedButton';

import { HeaderContainer, StyledHeader, HeaderPhoto } from './styles';

interface SocialIcons {
  icon: Function;
  url: string;
}

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderPhoto src="/images/profile.png" />
      <StyledHeader>
        <StyledHeader.Title>James Lee</StyledHeader.Title>
        <StyledHeader.Subtitle>Web App Developer</StyledHeader.Subtitle>
        <StyledHeader.IconList>
          {socialBtn.map((iconItem: SocialIcons) => (
            <IconedButton url={iconItem.url}>
              <iconItem.icon />
            </IconedButton>
          ))}
        </StyledHeader.IconList>
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
