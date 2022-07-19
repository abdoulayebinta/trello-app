import { useRef, useEffect } from 'react';

const useFocus = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
};
