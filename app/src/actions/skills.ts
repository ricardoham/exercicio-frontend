import { Dispatch } from 'redux';
import { profileAPI } from 'api';
import { fetchSkills, fetchSkillsSuccess, fetchSkillsFail } from 'actions/skillsActionTypes';
import { SkillsModel } from 'model/skills';

export const getSkills = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchSkills());
    const { data } = await profileAPI.get<SkillsModel>('/skills');
    dispatch(fetchSkillsSuccess(data));
  } catch (error) {
    dispatch(fetchSkillsFail(error));
  }
};
