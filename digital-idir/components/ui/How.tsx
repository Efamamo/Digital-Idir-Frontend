import React from 'react';
import Step from './Step';

function How() {
  return (
    <section className="py-28  text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">
        How Digital Idir Works
      </h2>

      {/* Container for the steps */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Step 1 */}
        <Step
          number={1}
          title="Sign Up"
          desc="Join your community Idir easily through the online platform."
        />

        {/* Step 2 */}
        <Step
          number={2}
          title="Verify Your Account"
          desc="After signing up, check your email and verify your account."
        />

        {/* Step 3 */}
        <Step
          number={3}
          title="Sign In"
          desc="After verification, sign in to your account to access all features."
        />

        {/* Step 4 */}
        <Step
          number={4}
          title="Stay Informed"
          desc="Receive live notifications for events, news, and important
            announcements."
        />

        {/* Step 5 */}
        <Step
          number={5}
          title="Pay Monthly Dues"
          desc="Ensure timely contributions by paying your monthly Idir dues online."
        />

        {/* Step 6 */}
        <Step
          number={6}
          title="Get Support"
          desc="Receive timely support from your Idir community when you need it
            most."
        />
      </div>
    </section>
  );
}

export default How;
