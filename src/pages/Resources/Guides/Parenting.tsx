import React from 'react';
import PageHero from '../../../components/PageHero';
import { Baby } from 'lucide-react';
import GuideNavigation from '../../../components/GuideNavigation';

const Parenting = () => {
  const sections = [
    {
      title: "The Fear & Realities of Pregnancy",
      content: [
        "Growing a Human with a Broken Jaw? Cool, Cool. – Pregnancy with TMJ can feel like a marathon you didn't sign up for. Hormonal shifts can make pain worse, and chewing becomes a herculean task. Lean on your doctors, but also know that pacing yourself is key.",
        "Labor & Delivery Real Talk – Giving birth is hard enough, but with TMJ, labor pain might not be your only concern. Talk to your healthcare team ahead of time about options to manage jaw pain or stress, whether it's breathing techniques or jaw-friendly positions.",
        "Carrying a Baby (Inside & Out) – Physical changes during pregnancy, like posture shifts and weight distribution, can put extra strain on your body. Once your baby's here, holding them for long periods or bending over cribs can take a toll. Use baby carriers that spread weight evenly, and don't be afraid to ask for help."
      ]
    },
    {
      title: "The Diaper Bag Struggle is Real",
      content: [
        "Lugging Around Baby Gear When You Can Barely Lift Yourself – Let's be real: hauling a diaper bag, car seat, stroller, and snacks (always snacks) is exhausting. Consider minimalist diaper bags or backpacks that don't strain your shoulders. Or better yet, use the buddy system—your partner or friend becomes the designated carrier.",
        "Invest in Convenient Tools – Baby gear like lightweight strollers, slings, or baby stations at home can make life more manageable. Convenience is your best friend here."
      ]
    },
    {
      title: "Child's Needs > Your Own Needs",
      content: [
        "When Your Kid Needs Something… and So Do You – TMJ doesn't stop when your kid needs you. Whether it's feeding time or a meltdown, their needs often come before yours. It's exhausting, but be gentle with yourself. Prioritize where you can, and don't feel guilty for taking short breaks.",
        "Ask for Backup – When you're burnt out, tap into your support system. You don't have to do it all. Grandparents, friends, or even babysitters can help give you time to recover and keep going."
      ]
    },
    {
      title: "Caring for Sick Kids While You're Also Struggling",
      content: [
        "Caring When You're Running on Empty – Nothing drains you faster than caring for a sick child, especially when your own pain is flaring up. Try to prepare for these moments by having a plan—easy meals, comfort items, and, if possible, help from family or friends. You can't pour from an empty cup, so even small moments of rest are crucial."
      ]
    },
    {
      title: "Explaining Your Condition to Your Kids",
      content: [
        'Keep It Real, Keep It Simple – Kids are perceptive; they\'ll notice when you\'re in pain. Explain it in kid-friendly terms: "Mommy\'s jaw hurts sometimes, so I might need to rest or eat softer foods." This can help build their empathy and understanding.',
        "Turn It Into a Teaching Moment – Teach your kids to be helpers when you're not feeling well. It builds compassion and gives them small ways to connect with you."
      ]
    },
    {
      title: "Splitting Parenting Duties",
      content: [
        "Teamwork Makes the Dream Work – If you have a partner, communicate openly about how your TMJ affects your ability to do certain tasks. Splitting parenting duties doesn't mean you're less of a parent—it's about playing to each other's strengths and protecting your health.",
        "When You're Solo Parenting – Solo parenting with TMJ is no joke. Find local mom groups, online forums, or community support. Remember, asking for help is brave, not weak."
      ]
    },
    {
      title: "The Village & The Tribe",
      content: [
        "It Takes a Village to Raise a Child and a Tribe to Support TMJ Patients – You can't do it alone, and you shouldn't have to. Surround yourself with people who understand your challenges, whether they're family, friends, or fellow TMJ warriors. Lean on each other, share advice, and know you're not navigating this journey solo."
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="TMJ Guide to Parenting"
        subtitle="Navigate parenthood while managing TMJ"
        backgroundImage="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Baby className="w-12 h-12 text-bubblegum mx-auto mb-4" />
          <p className="text-lg text-charcoal">
            Parenting is tough, but parenting with TMJ? That's like trying to keep up with a toddler 
            while balancing a ticking time-bomb in your jaw. Here's your guide to navigating parenthood 
            while managing TMJ.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-sigmar text-bubblegum mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-charcoal">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-charcoal">
            Parenting with TMJ is hard, but it's not impossible. You're doing your best, even on the days when
            your jaw (or body) wants to give out. Just remember: You've got this, and there's a whole tribe 
            cheering you on. Hang in there, jaw warriors! 👶
          </p>
        </div>

        <GuideNavigation currentPath="/resources/guides/parenting" />
      </div>
    </div>
  );
};

export default Parenting;