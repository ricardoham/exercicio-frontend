import React from 'react';
import { socialBtn } from 'utils/contants';
import { StyledHeader } from './styles';

interface SocialIcons {
  icon: Function;
  url: string;
}

const Header = () => {
  return (
    <section>
      <StyledHeader>
        <StyledHeader.Title>James Lee</StyledHeader.Title>
        <StyledHeader.Subtitle>Web App Developer</StyledHeader.Subtitle>
        <div>
          {socialBtn.map((iconItem: SocialIcons) => {
            return (
              <>
                <iconItem.icon />
              </>
            );
          })}
        </div>
      </StyledHeader>
    </section>
  );
};

export default Header;
