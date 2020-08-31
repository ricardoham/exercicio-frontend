import React from 'react';
import { Projects } from 'model/projects';
import Button from 'components/Button';
import { IoIosThumbsUp } from 'react-icons/io';
import useSnackBar from 'hooks/useSnackbar';

import {
  LastProjectContainer,
  LastProjectHeader,
  Ribbon,
  WrapperRibbon,
  ProjectImg,
  ButtonContainer,
} from './styles';

interface Props {
  newestProject?: Projects;
}

const LastProject = ({ newestProject }: Props) => {
  const { insert } = useSnackBar();

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
          <ButtonContainer>
            <Button color="secondary" onClick={() => insert('Thanks for Support!')}>
              <>
                <IoIosThumbsUp />
                <span>Back My Project</span>
              </>
            </Button>
          </ButtonContainer>
        </LastProjectContainer>
      )}
    </>
  );
};

export default LastProject;
