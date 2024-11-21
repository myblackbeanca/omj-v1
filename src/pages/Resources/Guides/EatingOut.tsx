import React from 'react';
import PageHero from '../../../components/PageHero';
import { Utensils } from 'lucide-react';
import GuideNavigation from '../../../components/GuideNavigation';

const EatingOut = () => {
  const cuisineTypes = [
    {
      type: "Delicatessen",
      items: [
        "Classic Matzo Ball Soup – Soft, comforting, and jaw-friendly. Plus, it's a deli staple!",
        "Egg Salad or Tuna Salad – Ask for it on soft bread or a wrap. No crusty rolls unless you want your jaw to file a complaint.",
        "Latkes – If you're feeling adventurous, make sure they're not too crispy, and top with a soft dollop of sour cream or applesauce to soften each bite."
      ]
    },
    {
      type: "Chinese",
      items: [
        "Egg Drop Soup or Wonton Soup – Warm, easy to eat, and no chewing required. Just skip the crunchy wontons.",
        "Steamed Dumplings – Ask for them soft and cut them into small pieces to avoid overworking your jaw.",
        "Soft Noodles (Lo Mein) – Go for noodles, not crunchy chow mein. Bonus points if you chopstick that into bite-sized jaw-friendly pieces."
      ]
    },
    {
      type: "Italian",
      items: [
        "Risotto – Creamy, easy to eat, and you'll feel all fancy with zero jaw pain.",
        "Pasta (Think Gnocchi or Soft Ravioli) – Avoid anything al dente and go for soft sauces. Marinara, cream sauce, whatever works—just don't go overboard with chewy meats.",
        "Lasagna – As long as it's soft and cheesy, you're golden. Fork it into manageable bites."
      ]
    },
    {
      type: "Steakhouse",
      items: [
        "Soup of the Day (Make Sure It's Not Chunky) – Warm and gentle on your jaw.",
        "Mashed Potatoes – Soft, creamy, and totally satisfying. Add gravy if you're feeling indulgent.",
        "Creamed spinach – Silky, delicious, and a great way to get your greens",
        "Fish (Grilled or Steamed) – Skip the steak; go for soft white fish or salmon that flakes easily."
      ]
    },
    {
      type: "Thai",
      items: [
        "Tom Kha Soup (Coconut Soup) – Flavorful and smooth.",
        "Soft Pad Thai (Extra Sauce, Please) – Ask for extra sauce to keep it easy on the jaw. Skip the crunchy toppings and peanuts.",
        "Curry with Rice – Choose a soft curry (no crispy tofu, sorry!) and mix it with rice for an easy-to-chew combo."
      ]
    },
    {
      type: "Salad Place",
      items: [
        "Chopped Salad with Extra Dressing – Go heavy on the dressing for lubrication and make sure all veggies are chopped super small. No crunchy croutons!",
        "Smoothies – If all else fails, most places offer smoothies or acai bowls. Just skip any toppings that require chewing."
      ]
    },
    {
      type: "Pizza Parlor",
      items: [
        "Thin-Crust Pizza – Cut it into tiny bites and go light on toppings to avoid the jaw workout.",
        "Margherita Pizza – Simple, soft cheese, and not overloaded with stuff that'll make you chew forever.",
        "Calzones – Soft filling options like spinach and cheese? Yes, please. Just watch out for the crispy edges."
      ]
    },
    {
      type: "Burger Joint",
      items: [
        "Soft Turkey or Veggie Burger – Ask for it on a soft bun. Avoid tough patties, and cut everything into manageable bites.",
        "Soup and Fries – If a burger's too much, grab the soup option (if available) and enjoy soft fries. Skip anything too crispy."
      ]
    },
    {
      type: "Fast Food Options",
      items: [
        "Chicken Nuggets (Cut Them Up) – Stick to small bites and dunk them in sauce to soften.",
        "Soft Taco (No Crunchy Shells) – Go for ground beef, beans, or veggies. Ask for extra sauce to keep it easy on your jaw.",
        "Milkshake – Let's be honest, milkshakes are the MVP for a reason. No chewing required."
      ]
    },
    {
      type: "Greek",
      items: [
        "Avgolemono Soup – This traditional Greek lemon and chicken soup is smooth, creamy, and gentle on the jaw. Plus, it's got that comforting tangy kick.",
        "Hummus & Soft Pita Bread – Go to town on hummus with soft pita or spread it on cucumbers for an easy-to-eat option.",
        "Dolmades (Stuffed Grape Leaves) – Opt for ones without any tough stems and cut them into smaller pieces for an easier chew.",
        "Moussaka (Soft Version) – This layered eggplant dish is like a Greek take on lasagna. Just make sure it's served soft with a lot of sauce."
      ]
    },
    {
      type: "Sushi",
      items: [
        "Sashimi (Soft Fish) – Soft cuts of fish like salmon or tuna are perfect. Skip anything with chewy octopus or squid.",
        "Nigiri – Soft fish on top of sushi rice is great if you're looking for a little more substance.",
        "Avocado Rolls – Keep it simple and gentle on your jaw with these soft veggie rolls.",
        "Tamago (Egg Sushi) – This sweet and soft egg omelette is a good TMJ-friendly sushi option.",
        "Avoid Crunch Rolls – Anything with 'tempura' or crunchy toppings is a hard pass."
      ]
    },
    {
      type: "Middle Eastern",
      items: [
        "Lentil Soup – Smooth, hearty, and jaw-friendly. Lentil soup is a staple and an easy win.",
        "Baba Ganoush & Soft Bread – Smoky eggplant dip is soft and flavorful—perfect with soft pita or even on its own.",
        "Falafel (Softened in Sauce) – If you can't resist falafel, ask for it with extra sauce or mash it up with hummus.",
        "Kofta in Sauce – Soft ground meat kofta in a tomato-based sauce is a great choice.",
        "Labneh with Olive Oil – This creamy, tangy spread is a great complement to soft breads or for mixing with softer veggies."
      ]
    },
    {
      type: "Mexican",
      items: [
        "Soft Tacos or Burritos (No Crunchy Shells) – Go for soft tortillas filled with shredded chicken, beans, or veggies.",
        "Guacamole & Refried Beans – Both are super soft, flavorful, and TMJ-friendly. Enjoy with soft tortillas instead of chips.",
        "Enchiladas – Soft tortillas stuffed with cheese, beans, or meat and baked in sauce.",
        "Tamales – Soft masa wrapped around flavorful fillings is a great option as long as they aren't too dry.",
        "Avoid Hard Tostadas & Crunchy Tacos – Stick to the softer stuff to keep your jaw happy."
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="TMJ Guide to Eating Out"
        subtitle="Navigate restaurants with confidence"
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Utensils className="w-12 h-12 text-bubblegum mx-auto mb-4" />
          <p className="text-lg text-charcoal mb-8">
            Hey TMJ fam! Eating out doesn't have to be a nightmare—you can keep living your best foodie 
            life without wrecking your jaw. Here's your go-to guide for navigating restaurant menus with 
            TMJ, because chewing? Not today.
          </p>
        </div>

        <div className="space-y-8">
          {cuisineTypes.map((cuisine, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-sigmar text-bubblegum mb-4">{cuisine.type}</h2>
              <ul className="space-y-3">
                {cuisine.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-bubblegum rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-charcoal">
            Remember: No shame in asking for adjustments! TMJ-friendly meals can be just as tasty—you've 
            got this. Bon appétit! 🍽️
          </p>
        </div>

        <GuideNavigation currentPath="/resources/guides/eating-out" />
      </div>
    </div>
  );
};

export default EatingOut;