import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'reducers/rootReducer';
import { getSkills } from 'actions/skills';
import SkillsProfile from 'pages/skills';

const SkillsContainer = () => {
  const dispatch: ThunkDispatch<RootState, {}, Action> = useDispatch();
  const { skillsData, isLoading } = useSelector((state: RootState) => state.skills);

  useEffect(() => {
    dispatch(getSkills());
  }, []);

  return <SkillsProfile skills={skillsData} loading={isLoading} />;
};

export default SkillsContainer;
