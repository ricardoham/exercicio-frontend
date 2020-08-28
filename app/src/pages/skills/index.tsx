import React from 'react';
import { SkillsModel } from 'model/skills';

interface Props {
  skills?: SkillsModel[];
  loading: boolean;
}

const ProfileSkills = ({ skills }: Props) => <div>Works</div>;

export default ProfileSkills;
