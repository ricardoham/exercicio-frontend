import React from 'react';
import { SkillsModel } from 'model/skills';
import Card from 'components/Card';
import ProgressBar from './components/ProgressBar';

interface Props {
  skills?: SkillsModel[];
  loading: boolean;
}

const ProfileSkills = ({ skills }: Props) => {
  return (
    <Card header="Skills">
      <>
        <p>aaa</p>
        {skills?.map((skill: SkillsModel) => (
          <ProgressBar name={skill.name} rank={skill.rank} percentage={skill.percentage} />
        ))}
      </>
    </Card>
  );
};

export default ProfileSkills;
