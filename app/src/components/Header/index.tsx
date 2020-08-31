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
      <HeaderPhoto src="/images/profile.jpg" />
      <StyledHeader>
        <StyledHeader.Title>Ricardo T. Manoel Junior</StyledHeader.Title>
        <StyledHeader.Subtitle>Web App Developer</StyledHeader.Subtitle>
        <StyledHeader.IconList>
          {socialBtn.map((iconItem: SocialIcons, index: number) => (
            <IconedButton key={index} url={iconItem.url}>
              <iconItem.icon />
            </IconedButton>
          ))}
        </StyledHeader.IconList>
      </StyledHeader>
      <Button color="primary" onClick={() => (window.location.href = 'mailto:rdomanoel@gmail.com')}>
        <>
          <IoIosSend />
          <span>Contact me</span>
        </>
      </Button>
    </HeaderContainer>
  );
};

export default Header;
