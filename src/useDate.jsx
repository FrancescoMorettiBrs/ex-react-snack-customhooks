import { useEffect, useState } from "react";

export default function useDate(locale = "it-IT", tz = "Europe/Rome") {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return {
    now,
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
  };
}
