import React from 'react';
import PageHero from '../components/PageHero';

const FAQ = () => {
  const faqs = [
    {
      question: "Man! I Feel Like a Woman! - But What About Men with TMJ?",
      answer: "Just like breast cancer impacts men too, TMJ/TMD does not discriminate—it hits everyone. Here is the thing: a lot of womens health issues get way less government research funding than they should, even though they affect millions. But by fighting for better care for women, men benefit too. Think of it like The Future is Female vibes—when we uplift womens healthcare, everyone wins. Better research, improved insurance coverage, reduced stigma—it all gets better for men AND women. We are in this together, just like any movement for progress. TMJ is a team effort, and we cannot do it without everyone on board. So, trust us—we see you, include you, and FEEL YOUR PAIN. Let us fight this fight together, because TMJ care should be for all of us.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=600"
    },
    {
      question: "Walk a Mile in My Shoes - What is a Lived Experience Expert?",
      answer: "A Lived Experience Expert is someone who has been through it—a patient, family member, or caregiver with firsthand knowledge that goes way beyond textbooks and research papers. The term was coined by a hemophilia advocacy group in 2020 to emphasize that real solutions come from the people living with these conditions every single day. It is not just about Taking Care of Business by tracking symptoms—being a Lived Experience Expert means having collaborative conversations, sharing stories, offering advice, and showing the healthcare system how to Listen Up! and be more culturally sensitive and humble. Basically, healthcare pros need to stop thinking they are Beyoncé—sometimes, we know what is best because we have walked in these shoes, and it is time they started listening.",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=600"
    },
    {
      question: "Doctor My Mind - Who Treats TMJ/TMD?",
      answer: "The short answer? We are still figuring it out. TMJ is like a Blinding Lights situation—everyone is looking for answers, but the research is still catching up. We do not have a universal playbook for how to diagnose it, what causes it, or which treatments actually work. So until we hit Clarity, the best way to tackle it is with a multi-disciplinary team. Think of it like The Avengers assembling: Dentists for jaw alignment, ENTs for ear pain and dizziness, Physical Therapists for muscle management, Pain Specialists for managing chronic pain, Mental Health Pros for dealing with the emotional toll. There is no magic bullet for TMJ, which is why it takes a whole squad of specialists working together. Teamwork Makes the Dream Work—the goal is to hit every angle until we can connect the dots and help you feel better.",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=600"
    },
    {
      question: "Complicated - What Causes TMJ/TMD?",
      answer: "Honestly? We do not know exactly what causes it. TMJ/TMD is still a bit of a Mystery, but we have got a laundry list of things that seem connected to the pain and joint degeneration. Some things make it worse (hello, stress, clenching, and injury). Some treatments (whether conservative, surgical, or alternative) provide temporary relief, while others can cause long-term problems. Lived Experience Experts and researchers both have anecdotes and data, but there is no one-size-fits-all fix. Some patients swear by certain treatments, while others say the same thing made them feel like Somebody That I Used to Know. At the end of the day, TMJ is trial-and-error city—we are still connecting the dots between what triggers it, what helps, and what hurts.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
    },
    {
      question: "Shake It Off? - What is the Deal with These Conditions?",
      answer: "If you are dealing with TMJ, you might find yourself tangled up with some other conditions, too. It is like that Bad Romance you did not ask for—TMJ loves to bring along trigeminal neuralgia, migraines, fibromyalgia, Ehlers-Danlos syndrome, and arthritis to the party. These conditions can include intense facial pain, migraines that knock you down, whole-body pain and fatigue, joint hypermobility, and inflammation. Many TMJ patients juggle multiple diagnoses—and we are here to help you find a way through it.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
    },
    {
      question: "No Scrubs - Why Is not TMJ Covered by Insurance?",
      answer: "Most insurance plans do not cover TMJ treatment, which leaves both patients and doctors scrambling for creative solutions. Doctors have to treat TMJ by labeling it as something else, like Botox for migraines, surgery for sleep apnea, or physical therapy for neck and back pain. Some docs will fill out insurance forms or help with reimbursement, but only a handful of insurance companies actually cover TMJ-specific care. At Oh My Jaw, we are working to change the system—because nobody should be excluded from care just because an insurance policy has not caught up with reality.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600"
    },
    {
      question: "Who Run the World? Girls. - Why Do More Women Have TMJ?",
      answer: "According to some so-called specialists, the reason more women are diagnosed with TMJ is because we are more likely to seek treatment than men. This take only highlights the gender bias in healthcare research—because the real story is a lot more complicated. Hormones play a role—there seems to be a connection between estrogen levels and jaw issues. Many girls develop symptoms during puberty and some women experience flare-ups around menopause. Domestic violence trauma may also be a factor for some patients. Scientists are digging deeper into genetic biomarkers, looking for clues.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
    },
    {
      question: "Should I Stay or Should I Go? - Is TMJ a Medical or Dental Condition?",
      answer: "Both—and neither. TMJ is an umbrella term for more than 30 overlapping conditions that cause pain and damage to the jaw joints. It is basically the Freaky Friday of health issues—it could fall under dental care or medical care, depending on which symptoms hit the hardest. Because TMJ is complicated, it takes a multidisciplinary dream team to figure it out. Think: Dentists for alignment, appliances, and bite issues, Doctors for pain management, imaging, and any related medical conditions, Physical therapists, mental health pros, and more—because TMJ does not mess around. The key to managing TMJ? Teamwork. No single specialist has all the answers, so your care needs to hit every angle.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about TMJ disorders"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="md:flex gap-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <img
                    src={faq.image}
                    alt={faq.question}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-sigmar text-bubblegum mb-4">{faq.question}</h3>
                  <p className="text-charcoal leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;