'use client';
import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: 'What is Digital Idir?',
      answer:
        'Digital Idir is a modernized platform that digitizes the traditional Ethiopian Idir system. It allows community members to engage easily through online transactions, notifications, and memorial services, simplifying participation in community events and support.',
    },
    {
      question: 'How does Digital Idir enhance community support?',
      answer:
        'Digital Idir strengthens community support by providing real-time notifications for events, allowing members to stay updated on important happenings. It enables members to contribute digitally to community funds and support each other in times of need, thereby fostering a sense of unity and collaboration.',
    },
    {
      question: 'How can I join Digital Idir?',
      answer:
        'Joining Digital Idir is simple! Visit our website and click on the “Sign Up” button. Fill out the registration form with your details, verify your account via email, and start exploring the features available to you as a community member.',
    },
    {
      question: 'Is my information secure on Digital Idir?',
      answer:
        'Yes, your security is our top priority. Digital Idir employs industry-standard encryption and security measures to protect your personal information and transaction data. We adhere to strict privacy policies to ensure that your information is kept confidential and secure.',
    },
    {
      question: 'Can I access Digital Idir on my mobile device?',
      answer:
        'Absolutely! Digital Idir is designed to be mobile-friendly, allowing you to access all features and services from your smartphone or tablet. Whether you’re on the go or at home, you can stay connected to your community effortlessly.',
    },
    {
      question: 'How can I get support if I encounter issues?',
      answer:
        'If you need assistance, you can reach out to our support team through the “Contact Us” section on the website. We also offer a help center with resources and guides to help you navigate any issues you may encounter.',
    },
    {
      question: 'What are the membership dues, and how do I pay them?',
      answer:
        'Membership dues are a small contribution required to maintain the services provided by Digital Idir. You can conveniently pay your dues online through our platform at the beginning of each month. Reminders will be sent to ensure you never miss a payment.',
    },
  ];

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-28 px-5 md:px-0">
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center text-white">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-7xl mx-auto">
        {questionsAnswers.map((qa, index) => (
          <div key={index} className="border border-[#101012] mb-2">
            <div
              className="flex justify-between items-center p-4 rounded-sm bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold text-sm md:text-base">
                {qa.question}
              </span>
              <span
                className={`ml-2 transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-4 text-white duration">
                <p className="text-sm md:text-base">{qa.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
