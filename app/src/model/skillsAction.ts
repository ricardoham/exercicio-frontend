import { FETCH_SKILLS, FETCH_SKILLS_SUCCESS, FETCH_SKILLS_FAIL } from 'actions/skillsActionTypes';
import { SkillsModel } from 'model/skills';

interface FetchSkillsAction {
  type: typeof FETCH_SKILLS;
}

interface FetchSkillsSuccessAction {
  type: typeof FETCH_SKILLS_SUCCESS;
  payload: SkillsModel[];
}

interface FetchSkillsFailAction {
  type: typeof FETCH_SKILLS_FAIL;
  payload: string;
}

export type SkillsAction = FetchSkillsAction | FetchSkillsSuccessAction | FetchSkillsFailAction;
