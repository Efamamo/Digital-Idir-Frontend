import React from 'react';
import Feature from './Feature';

function Features() {
  return (
    <section className="py-28 px-5 md:px-0 text-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">
        {' '}
        Why Choose Digital Idir?
      </h2>
      <div className="flex flex-wrap text-center max-w-screen-2xl mx-auto gap-14">
        <Feature
          image="/assets/pay.jpg"
          title="Online Transactions"
          description="Enjoy secure and swift online payments powered by Chapa, allowing you to contribute to Idir groups and support your community with ease, anytime, anywhere."
        />
        <Feature
          image="/assets/notify.jpg"
          title="Live Notifications"
          description="Receive real-time updates on important community news, announcements, and events, ensuring that you never miss out on key moments or information."
        />
        <Feature
          image="/assets/pro.jpg"
          title="Memorials"
          description="Create lasting digital memorials to remember and honor the deceased, offering a meaningful way for family and friends to pay tribute and keep memories alive."
        />
      </div>
    </section>
  );
}

export default Features;
