import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAIL,
} from 'actions/projectActionTypes';
import { Projects } from 'model/projects';
import { ProjectsAction } from 'model/projectAction';

export interface ProjectsState {
  projectsData?: Projects[];
  newestProject?: Projects;
  isLoading: boolean;
  error?: string;
}

const initialState: ProjectsState = {
  projectsData: [],
  newestProject: undefined,
  isLoading: false,
  error: undefined,
};

export const projectsReducer = (state = initialState, action: ProjectsAction): ProjectsState => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        projectsData: [],
        newestProject: undefined,
        isLoading: true,
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projectsData: action.payload.slice(1),
        newestProject: action.payload.find((el) => el !== undefined),
        isLoading: false,
      };
    case FETCH_PROJECTS_FAIL:
      return {
        ...state,
        projectsData: undefined,
        newestProject: undefined,
        isLoading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
