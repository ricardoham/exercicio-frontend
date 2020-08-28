import { combineReducers } from 'redux';
import { projectsReducer, ProjectsState } from './projects';
import { skillsReducer, SkillsState } from './skills';

export interface RootState {
  projects: ProjectsState;
  skills: SkillsState;
}

const rootReducer = combineReducers<RootState>({
  projects: projectsReducer,
  skills: skillsReducer,
});

export default rootReducer;
