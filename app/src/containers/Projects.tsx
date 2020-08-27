import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers/index';
import { getProjects } from 'actions/projects';
import { Action } from 'redux';

const ProjectsContainer = () => {
  const dispatch: ThunkDispatch<RootState, {}, Action> = useDispatch();
  const data = useSelector((state: RootState) => state.projects.projectsData);
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  console.log('DATA', data);

  return <div>Works</div>;
};

export default ProjectsContainer;
