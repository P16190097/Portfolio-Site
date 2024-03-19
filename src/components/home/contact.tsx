import React from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  });
      
  return (
    <section id="contact">
      <div className={`content-container fade-in ${inView && 'show'}`} ref={ref}>
        <h2>Get In Touch</h2>
        <p>
          My Inbox is open to new opportunities, if you have any questions please don&apos;t hesitate to get in touch and I&apos;ll try my best to get back to you!
        </p>
        <a href="mailto:mayoe@live.co.uk">Lets talk</a>
      </div>
    </section>
  );
};

export default Contact;