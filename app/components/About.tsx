import React from 'react';
import MyDescription from './MyDescription';
import TechExp from './TechExp';
import TimelineC from './TimelineMy';

const About = () => {
  return (
    <div className='' id='about'>
      <MyDescription />
      <div id='timeline'><TimelineC /></div>
      <TechExp />
    </div>
  );
};

export default About;
