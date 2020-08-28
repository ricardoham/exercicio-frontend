import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'reducers/rootReducer';
import { getProjects } from 'actions/projects';
import Projects from 'pages/projects';

const ProjectsContainer = () => {
  const dispatch: ThunkDispatch<RootState, {}, Action> = useDispatch();
  const { projectsData, newestProject, isLoading } = useSelector(
    (state: RootState) => state.projects,
  );

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return <Projects projects={projectsData} newestProject={newestProject} loading={isLoading} />;
};

export default ProjectsContainer;
