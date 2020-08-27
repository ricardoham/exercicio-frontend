import React from 'react';
import ContentList from 'components/ContentList';
import { Projects } from 'model/projects';
import LastProject from './components/LastProject';

interface Props {
  projects?: Projects[];
  newestProject?: Projects;
  loading: boolean;
}

const ProfileProjects = ({ projects, newestProject, loading }: Props) => {
  return (
    <div>
      <LastProject newestProject={newestProject} />
      <ContentList content={projects} />
    </div>
  );
};

export default ProfileProjects;
