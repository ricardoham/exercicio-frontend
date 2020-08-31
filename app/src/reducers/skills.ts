import { FETCH_SKILLS, FETCH_SKILLS_SUCCESS, FETCH_SKILLS_FAIL } from 'actions/skillsActionTypes';
import { SkillsAction } from 'model/skillsAction';
import { SkillsModel } from 'model/skills';

export interface SkillsState {
  skillsData?: SkillsModel[];
  isLoading: boolean;
  error?: string;
}

const initialState: SkillsState = {
  skillsData: [],
  isLoading: false,
  error: undefined,
};

export const skillsReducer = (state = initialState, action: SkillsAction): SkillsState => {
  switch (action.type) {
    case FETCH_SKILLS:
      return {
        ...state,
        skillsData: [],
        isLoading: true,
      };
    case FETCH_SKILLS_SUCCESS:
      return {
        ...state,
        skillsData: action.payload,
        isLoading: false,
      };
    case FETCH_SKILLS_FAIL:
      return {
        ...state,
        skillsData: undefined,
        isLoading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
