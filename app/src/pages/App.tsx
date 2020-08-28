import React from 'react';
import Header from 'components/Header';
import ProjectsContainer from 'containers/Projects';
import About from './about';
import Address from './adress';
import SkillsContainer from 'containers/Skills';

import { MainContainer, Aside } from './styles';

function App() {
  return (
    <MainContainer>
      <Header />
      <div>
        <div>
          <About />
          <ProjectsContainer />
        </div>
        <Aside>
          <Address />
          <SkillsContainer />
        </Aside>
      </div>
    </MainContainer>
  );
}

export default App;
