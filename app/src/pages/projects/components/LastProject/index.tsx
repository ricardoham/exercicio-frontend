import React from 'react';
import { Projects } from 'model/projects';
import Button from 'components/Button';

import { LastProjectHeader } from './styles';

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
        <section>
          <LastProjectHeader>
            <LastProjectHeader.Title>{newestProject.title}</LastProjectHeader.Title>
            <LastProjectHeader.Subtitle>{newestProject.subtitle}</LastProjectHeader.Subtitle>
          </LastProjectHeader>
          <img src={`/images/${newestProject.picture}`} />
          <p>{newestProject.description}</p>
          <Button color="secondary" onClick={handleClickButton} text="Back My Project" />
        </section>
      )}
    </>
  );
};

export default LastProject;
