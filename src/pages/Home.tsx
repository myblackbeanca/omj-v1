import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import MissionVisionGoals from '../components/MissionVisionGoals';
import Issues from '../components/Issues';
import Statistics from '../components/Statistics';
import PatientStories from '../components/PatientStories';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <MissionVisionGoals />
      <Issues />
      <Statistics />
      <PatientStories />
      <Newsletter />
    </div>
  );
};

export default Home;