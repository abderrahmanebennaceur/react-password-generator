import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-sleek-gray">
      <h2 className="text-3xl font-semibold mb-6 text-deep-blue uppercase text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Customizable Length: Choose your desired password length.",
          "Character Options: Include uppercase letters, numbers, and symbols.",
          "Copy to Clipboard: Easily copy the generated password with one click.",
          "Password Strength Indicator: Visual feedback on password strength.",
          "Dark Mode: Switch to a dark theme for comfortable use in low light.",
          "Security Tips: Learn best practices for password security."
        ].map((feature, index) => (
          <div key={index} className="p-4 bg-deep-blue border border-deep-blue rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <p className="text-soft-white">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;