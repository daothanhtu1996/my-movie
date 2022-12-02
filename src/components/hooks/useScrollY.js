import { useEffect, useState } from "react";

export function useScrollY() {
  const [scrollY, setScollY] = useState(0);

  const handelScrollY = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setScollY(scrollY);
  };

  useEffect(() => {
    handelScrollY();
    window.addEventListener("scrollY", handelScrollY);
    return () => {
      window.removeEventListener("scrollY", handelScrollY);
    };
  }, []);

  return([scrollY]);
}
