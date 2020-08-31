import React from 'react';
import ContentList from 'components/ContentList';
import { Projects } from 'model/projects';
import LastProject from './components/LastProject';
import Card from 'components/Card';
import Divider from 'components/Divider';

interface Props {
  projects?: Projects[];
  newestProject?: Projects;
  loading: boolean;
}

const ProfileProjects = ({ projects, newestProject, loading }: Props) => {
  return (
    <Card header="Latest Projects">
      <>
        <LastProject newestProject={newestProject} />
        <Divider />
        <ContentList content={projects} />
      </>
    </Card>
  );
};

export default ProfileProjects;
