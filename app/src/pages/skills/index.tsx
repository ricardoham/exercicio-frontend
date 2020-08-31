import React from 'react';
import { SkillsModel } from 'model/skills';
import Card from 'components/Card';
import ProgressBar from './components/ProgressBar';
import Loader from 'components/Loader';

interface Props {
  skills?: SkillsModel[];
  loading: boolean;
}

const ProfileSkills = ({ skills, loading }: Props) => {
  return (
    <Card header="Skills">
      {loading ? (
        <Loader />
      ) : (
        <>
          <p>
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            Nam eget dui. Etiam rhoncus. Maecenas tempus
          </p>
          {skills?.map((skill: SkillsModel, index: number) => (
            <ProgressBar
              key={index}
              name={skill.name}
              rank={skill.rank}
              percentage={skill.percentage}
            />
          ))}
        </>
      )}
    </Card>
  );
};

export default ProfileSkills;
