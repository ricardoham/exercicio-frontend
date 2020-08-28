import { action } from 'typesafe-actions';
import { SkillsModel } from 'model/skills';

export const FETCH_SKILLS = 'FETCH_SKILLS';
export const FETCH_SKILLS_SUCCESS = 'FETCH_SKILLS_SUCCESS';
export const FETCH_SKILLS_FAIL = 'FETCH_SKILLS_FAIL';

export const fetchSkills = () => action(FETCH_SKILLS);

export const fetchSkillsSuccess = (result: SkillsModel) => action(FETCH_SKILLS_SUCCESS, result);

export const fetchSkillsFail = (error: string) => action(FETCH_SKILLS_FAIL, error);
