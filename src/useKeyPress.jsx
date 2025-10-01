import { useEffect, useState } from "react";

export default function useKeyPress(targetKey) {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const down = (e) => e.key === targetKey && setPressed(true);
    const up = (e) => e.key === targetKey && setPressed(false);

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.addEventListener("keydown", down);
      window.addEventListener("keyup", up);
    };
  }, [targetKey]);

  return pressed;
}
