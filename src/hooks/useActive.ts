import { useEffect, useState } from "react";

export const useActive = () => {
  const [active, setActive] = useState<string>("");
  const number = localStorage.getItem("active number");

  useEffect(() => {
    if (number !== null) {
      setActive(number);
    } else {
      return;
    }
  }, [number]);

  return { active };
};
