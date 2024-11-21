import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import MissionVisionGoals from '../components/MissionVisionGoals';
import Issues from '../components/Issues';
import Statistics from '../components/Statistics';
import PatientStories from '../components/PatientStories';
import Newsletter from '../components/Newsletter';
import TMJChecker from '../components/TMJChecker';

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <TMJChecker />
      <MissionVisionGoals />
      <Issues />
      <Statistics />
      <PatientStories />
      <Newsletter />
    </div>
  );
};

export default Home;