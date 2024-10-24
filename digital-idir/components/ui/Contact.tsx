import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section className="py-32 px-5 md:px-0">
      <div className="flex flex-wrap gap-8 justify-evenly text-white">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            Contact Us
          </h2>
          <div className="flex flex-col gap-3 max-w-xl">
            <p className="text-sm md:text-base">
              Email, call or complete the form to learn how Digital Idir can
              solve your problem.
            </p>
            <p className="text-sm md:text-base">ephremmamo@gmail.com</p>
            <p className="text-sm md:text-base">0969827560</p>

            <div className="mt-4">
              <h3 className="font-semibold text-lg md:text-xl">
                Feedback and Suggestions
              </h3>
              <p className="text-sm md:text-base">
                We value your feedback and are continuosly working to improve
                Digtal Idir. Your Input is crucial in shaping the future of
                Digital Idir.
              </p>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold text-lg md:text-xl">
                Customer Support
              </h3>
              <p className="text-sm md:text-base">
                Your satisfaction is our priority. We're always working to
                enhance Digital Idir, and your input is invaluable in ensuring
                we meet your needs.
              </p>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold text-lg md:text-xl">
                Media Inqueries
              </h3>
              <p className="text-sm md:text-base">
                We welcome opportunities to share the story of Digital Idir. Get
                in touch with us for media-related inquiries, and help us spread
                the word.
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
