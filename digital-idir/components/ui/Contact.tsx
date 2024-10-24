import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section className="py-32">
      <div className="flex flex-wrap justify-evenly text-white">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
          <div className="flex flex-col gap-3 max-w-xl">
            <p>
              Email, call or complete the form to learn how Digital Idir can
              solve your problem.
            </p>
            <p>ephremmamo@gmail.com</p>
            <p>0969827560</p>

            <div className="mt-4">
              <h3 className="font-semibold text-lg">
                Feedback and Suggestions
              </h3>
              <p className="text-base">
                We value your feedback and are continuosly working to improve
                Digtal Idir. Your Input is crucial in shaping the future of
                Digital Idir.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Customer Support</h3>
              <p className="text-base">
                We value your feedback and are continuosly working to improve
                Digtal Idir. Your Input is crucial in shaping the future of
                Digital Idir.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Media Inqueries</h3>
              <p className="text-base">
                We value your feedback and are continuosly working to improve
                Digtal Idir. Your Input is crucial in shaping the future of
                Digital Idir.
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
