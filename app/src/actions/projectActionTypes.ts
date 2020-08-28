import { action } from 'typesafe-actions';
import { Projects } from 'model/projects';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAIL = 'FETCH_PROJECTS_FAIL';

export const fetchProject = () => action(FETCH_PROJECTS);

export const fetchProjectSuccess = (result: Projects) => action(FETCH_PROJECTS_SUCCESS, result);

export const fetchProjectFail = (error: string) => action(FETCH_PROJECTS_FAIL, error);
