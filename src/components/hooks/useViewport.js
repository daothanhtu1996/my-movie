import { useEffect, useState } from "react";

export const useViewport = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    const handelWindowWidth = () => {
      const width = window.innerWidth || document.documentElement.clientWidth;
      setWindowWidth(width);
    };
    handelWindowWidth();
    window.addEventListener("resize", handelWindowWidth);
    return () => {
      window.removeEventListener("resize", handelWindowWidth);
    };
  }, []);
  return [windowWidth];
};
