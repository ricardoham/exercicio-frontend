import { FETCH_PROJECTS, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAIL } from 'actions/actionsTypes';
import { Projects } from 'model/projects';
import { Reducer } from 'redux';

export interface ProjectsState {
  projectsData: Projects[];
  isLoading: boolean;
  error?: string;
}

const initialState: ProjectsState = {
  projectsData: [],
  isLoading: false,
  error: undefined,
};

export const projectsReducer: Reducer<ProjectsState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        projectsData: [],
        isLoading: true,
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projectsData: action.payload,
        isLoading: false,
      };
    case FETCH_PROJECTS_FAIL:
      return {
        ...state,
        projectsData: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
