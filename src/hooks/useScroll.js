import { useState, useEffect } from 'react';

function useScroll() {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect( () => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrollingUp(e.target.documentElement.scrollTop < scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return [scrollingUp, scrollTop];
}

export default useScroll;