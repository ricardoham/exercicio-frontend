import { Dispatch } from 'redux';
import { Projects } from 'model/projects';
import { profileAPI } from 'api';
import { fetchProject, fetchProjectSuccess, fetchProjectFail } from 'actions/actionsTypes';

export const getProjects = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchProject());
    const { data } = await profileAPI.get<Projects>('/projects');
    dispatch(fetchProjectSuccess(data));
  } catch (error) {
    dispatch(fetchProjectFail(error));
  }
};
