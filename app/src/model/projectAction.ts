import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAIL,
} from 'actions/projectActionTypes';
import { Projects } from 'model/projects';

interface FetchProjectsAction {
  type: typeof FETCH_PROJECTS;
}

interface FetchProjectsSuccessAction {
  type: typeof FETCH_PROJECTS_SUCCESS;
  payload: Projects[];
}

interface FetchProjectsFailAction {
  type: typeof FETCH_PROJECTS_FAIL;
  payload: string;
}

export type ProjectsAction =
  | FetchProjectsAction
  | FetchProjectsSuccessAction
  | FetchProjectsFailAction;
