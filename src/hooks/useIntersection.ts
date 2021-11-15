import { useState, useEffect } from 'react';

const useIntersection = (element: Element, rootMargin: string) => {
  const [isVisible, setState] = useState(false);
  console.log(element);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // if (entry.isIntersecting) {
        //   setState(entry.isIntersecting); // enable this to limit rendering to only once
        //   observer.unobserve(element.current);
        // }
        setState(entry.isIntersecting);
      }, { rootMargin }
    );

    element && observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return isVisible;
};

export default useIntersection;