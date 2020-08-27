import { combineReducers } from 'redux';
import { projectsReducer, ProjectsState } from 'reducers/projects';

interface RootState {
  projects: ProjectsState;
}

const rootReducer = combineReducers<RootState>({
  projects: projectsReducer,
});

export default rootReducer;
