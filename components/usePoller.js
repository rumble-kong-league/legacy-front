import { useEffect, useRef } from "react";

const usePoller = (fn, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = fn;
  }, [fn]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  useEffect(() => {
    fn();
  }, []);
};

export default usePoller;
