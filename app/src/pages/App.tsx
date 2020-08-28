import React from 'react';
import Header from 'components/Header';
import ProjectsContainer from 'containers/Projects';
import About from './about';
import Address from './adress';
import SkillsContainer from 'containers/Skills';

function App() {
  return (
    <main>
      <Header />
      <About />
      <Address />
      <SkillsContainer />
      <ProjectsContainer />
    </main>
  );
}

export default App;
