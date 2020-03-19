import { useEffect } from 'react';

export default (ref, handler) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });
};
