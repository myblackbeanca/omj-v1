import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#4A555D] mb-8">PRIVACY POLICY</h1>
        <p className="text-gray-600 mb-4">Effective Date: August 1, 2024</p>

        <section className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-[#4A555D] mt-8 mb-4">Introduction</h2>
          <p>At OH MY JAW, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information. By using our website and services, you agree to the practices described in this policy.</p>

          <h2 className="text-2xl font-semibold text-[#4A555D] mt-8 mb-4">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Personal Information:</strong> This includes your name, email address, phone number, and any other information you provide when you sign up for newsletters, make donations, or participate in our programs.</li>
            <li><strong>Non-Personal Information:</strong> We may collect non-identifiable information such as browser type, IP address, pages visited, and time spent on our website through cookies and other tracking technologies. This helps us improve our site and understand user behavior.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#4A555D] mt-8 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Provide and Improve Services:</strong> We use your information to manage your participation in our programs, respond to your inquiries, and enhance your experience with OH MY JAW.</li>
            <li><strong>Communication:</strong> We may send you newsletters, updates, and information about our programs and events. You can opt out of these communications at any time.</li>
            <li><strong>Fundraising and Donations:</strong> If you make a donation, we use your personal information to process your payment and acknowledge your contribution.</li>
            <li><strong>Compliance:</strong> We may use your information to comply with legal obligations, prevent fraud, and ensure the security of our website.</li>
          </ul>

          {/* Continue with sections 3-9 following the same pattern */}
          
          <h2 className="text-2xl font-semibold text-[#4A555D] mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
          <div className="mt-4">
            <img 
              src="https://github.com/myblackbeanca/tmjimages/blob/main/logone.png?raw=true"
              alt="OH MY JAW"
              className="h-12 w-auto mb-4"
            />
            <p>info@ohmyjaw.org</p>
          </div>

          <p className="mt-8">Thank you for trusting OH MY JAW with your personal information. Your privacy is important to us, and we are committed to protecting it.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;