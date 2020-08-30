import React from 'react';
import { socialBtn } from 'utils/contants';
import IconedButton from 'components/IconedButton';

import { HeaderContainer, StyledHeader, HeaderPhoto } from './styles';
import Button from 'components/Button';
import { IoIosSend } from 'react-icons/io';

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
          {socialBtn.map((iconItem: SocialIcons, index: number) => (
            <IconedButton key={index} url={iconItem.url}>
              <iconItem.icon />
            </IconedButton>
          ))}
        </StyledHeader.IconList>
      </StyledHeader>
      <Button color="primary" onClick={() => console.log('clicked')}>
        <>
          <IoIosSend />
          <span>TEST</span>
        </>
      </Button>
    </HeaderContainer>
  );
};

export default Header;
