import React from 'react';
import { Projects } from 'model/projects';
import Button from 'components/Button';

import {
  LastProjectContainer,
  LastProjectHeader,
  Ribbon,
  WrapperRibbon,
  ProjectImg,
  ButtonContainer,
} from './styles';
import { IoIosThumbsUp } from 'react-icons/io';

import useSnackBar from 'hooks/useSnackbar';

interface Props {
  newestProject?: Projects;
}

const LastProject = ({ newestProject }: Props) => {
  const { insert } = useSnackBar();
  // const handleClickButton = () => {
  //   console.log('clicked', bla);
  //   insert('bla');
  // };
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
            <Button color="secondary" onClick={() => insert('Thank Your')}>
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
