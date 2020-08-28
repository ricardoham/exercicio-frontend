import React from 'react';
import { Projects } from 'model/projects';
import Button from 'components/Button';

import {
  LastProjectContainer,
  LastProjectHeader,
  Ribbon,
  WrapperRibbon,
  ProjectImg,
} from './styles';

interface Props {
  newestProject?: Projects;
}

const LastProject = ({ newestProject }: Props) => {
  const handleClickButton = () => {
    console.log('clicked');
  };
  return (
    <>
      {newestProject && (
        <LastProjectContainer>
          <LastProjectHeader>
            <LastProjectHeader.Title>{newestProject.title}</LastProjectHeader.Title>
            <LastProjectHeader.Subtitle>{newestProject.subtitle}</LastProjectHeader.Subtitle>
          </LastProjectHeader>
          <WrapperRibbon>
            <ProjectImg src={`/images/${newestProject.picture}`} />
            <Ribbon>App</Ribbon>
          </WrapperRibbon>
          <p>{newestProject.description}</p>
          <Button color="secondary" onClick={handleClickButton} text="Back My Project" />
        </LastProjectContainer>
      )}
    </>
  );
};

export default LastProject;
