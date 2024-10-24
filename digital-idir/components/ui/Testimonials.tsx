import React from 'react';
import Testimonial from './Testimonial';

function Testimonials() {
  return (
    <section className="pt-28 pb-36  text-white ">
      <h2 className="text-4xl font-bold mb-10 text-center">
        {' '}
        What Our Users Say
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        <Testimonial
          image="/assets/sun.jpg"
          testimony='"Digital Idir has completely transformed how we support each other. The fast online payments and real-time notifications make it easy to stay connected with my community, even when I’m busy."'
          name="Nardos Daniel"
        />
        <Testimonial
          image="/assets/hero.jpg"
          testimony='"I love the digital memorials feature. It allowed my family to create a beautiful tribute for my late father, which everyone could visit and share memories on. It’s a wonderful way to honor his life."'
          name="Beka Birhanu"
        />
        <Testimonial
          image="/assets/future.jpg"
          testimony='"With Digital Idir, managing contributions and staying informed has never been easier. The Chapa integration is seamless, and I appreciate how it simplifies traditional practices."'
          name="Kaleb Asratemedhin"
        />
        <Testimonial
          image="/assets/eth.jpg"
          testimony="Digital Idir has transformed the way our community operates. The instant notifications keep us informed about events and contributions, making it easier to stay connected and support one another.
"
          name="Yohannis Alemayehu"
        />
      </div>
    </section>
  );
}

export default Testimonials;
