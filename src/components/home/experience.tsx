import React from 'react';
import { useInView } from 'react-intersection-observer';

const Employment = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  });

  return (
    <section id="employmet">
      <div className={inView ? 'content-container fade-in show' : 'content-container fade-in'} ref={ref}>
        
      </div>
    </section>
  );
};

export default Employment;