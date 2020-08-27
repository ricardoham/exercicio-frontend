import React from 'react';
import { Projects } from 'model/projects';
import Button from 'components/Button';

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
          <h3>{newestProject.title}</h3>
          <h4>{newestProject.subtitle}</h4>
          <img src={`/images/${newestProject.picture}`} />
          <p>{newestProject.description}</p>
          <Button color="secondary" onClick={handleClickButton} text="Back My Project" />
        </section>
      )}
    </>
  );
};

export default LastProject;
