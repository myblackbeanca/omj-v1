import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sigmar text-charcoal mb-8">
            What is Oh my jaw?
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg">
            <div className="max-w-[400px] mx-auto mb-8">
              <div style={{ paddingTop: '177.78%', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/1031615792?badge=0&autopause=0&player_id=0&app_id=58479"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  className="rounded-xl shadow-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  allowFullScreen
                  title="Is TMJ a Women's Issue? This Story Will Shock You"
                ></iframe>
              </div>
            </div>
            <p className="text-charcoal">
              OH MY JAW is a nonprofit all about changing the perception of TMJ disorders and women's health issues affecting the jaw.
            </p>
            <p className="text-charcoal">
              We're here to educate the world about life with TMJ and debunk the myth that TMJ is just a stress response. It's a complex condition impacting way more than just your jaw joint. Our mission is to spread the word and highlight the broad health implications of TMJ disorders, making sure everyone gets the full picture – because we've got issues, and they aren't all in our head!
            </p>
            <Link to="/about-omj" className="bg-sunshine text-charcoal font-bold px-6 py-3 rounded-full flex items-center mx-auto hover:bg-opacity-80 transition-colors w-fit">
              Learn more about OMJ <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h3 className="text-3xl font-sigmar text-charcoal mb-6">
            What is TMJ/TMD?
          </h3>
          <p className="text-lg text-charcoal mb-6">
            TMJ/TMD isn't just about a sore jaw – it's way more than that. TMDs (Temporomandibular Disorders) are connected to over 30 different health conditions that can mess with everything from your jaw joints to your entire body. It's not just in your head, we promise! (Shoutout to the NASEM report for that one).
          </p>
          <Link to="/about-tmj" className="bg-sunshine text-charcoal font-bold px-6 py-3 rounded-full flex items-center mx-auto hover:bg-opacity-80 transition-colors w-fit">
            Learn more about TMJ <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="mt-16">
          <img 
            src="https://github.com/myblackbeanca/tmjimages/blob/main/omjbanner.png?raw=true"
            alt="TMJ Impact"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;