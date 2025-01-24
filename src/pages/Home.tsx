import React from 'react';
import { Instagram, Linkedin, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className=" bg-[#1D2B35] flex flex-col items-center justify-center px-4 pt-0">
      <div className="text-center flex-grow flex flex-col items-center justify-center">
        <img
          src="https://github.com/myblackbeanca/tmjimages/blob/main/logone.png?raw=true"
          alt="OH MY JAW"
          className="h-64 w-auto mx-auto mb-12"
        />
        <div className="bg-bubblegum text-white px-6 py-3 rounded-full font-semibold mb-12 animate-pulse">
          Under Construction
        </div>
        <div className="flex items-center space-x-2 mb-4 text-gray-300">
          <span>Show us </span>
          <Heart className="w-5 h-5 text-bubblegum" />
          <span>on our socials. </span>
        </div>
        <div className="flex space-x-2 mb-6">
          <a
            href="https://www.instagram.com/ohhhmyjaw/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-bubblegum transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/oh-my-jaw/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-bubblegum transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      
      <div className="mt-auto text-center text-sm text-gray-300 py-8 px-4">
        <p>© 2024 OHMYJAW INC. All rights reserved. OHMYJAW INC is a qualified 501(c)(3) tax-exempt organization.</p>
        <p className="mt-2">Tax ID Number: 99-3990593</p>
      </div>
    </div>
  );
};

export default Home;
// import React from 'react';
// import Hero from '../components/Hero';
// import Mission from '../components/Mission';
// import MissionVisionGoals from '../components/MissionVisionGoals';
// import Issues from '../components/Issues';
// import Statistics from '../components/Statistics';
// import PatientStories from '../components/PatientStories';
// import Newsletter from '../components/Newsletter';
// import TMJChecker from '../components/TMJChecker';

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//       <Mission />
//       <TMJChecker />
//       <MissionVisionGoals />
//       <Issues />
//       <Statistics />
//       <PatientStories />
//       <Newsletter />
//     </div>
//   );
// };

// export default Home;