import React from 'react';
import Services from './Services';
import RecentWork from './RecentWork';
import Clients from './Clients';
import TechStack from './TechExp';
import Process from './Process';
import FAQ from './FAQ';
import ContactSection from './ContactSection';
import ProblemsSolved from './ProblemsSolved';

const Work = () => {
  return (
    <div id="work">
      <Clients />
      <ProblemsSolved />
      <Services />
      <RecentWork />
      <TechStack />
      <Process />
      <FAQ />
      <ContactSection />
    </div>
  );
};

export default Work;