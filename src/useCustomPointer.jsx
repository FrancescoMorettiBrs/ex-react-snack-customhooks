import { useEffect, useState } from "react";

export default function useCustomPointer(content = "🔥") {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    const prev = document.body.style.cursor;
    document.body.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.style.cursor = prev || "auto";
    };
  }, []);
  return <div style={{ position: "fixed", left: mouse.x, top: mouse.y, pointerEvents: "none" }}>{typeof content === "string" ? <span>{content}</span> : content}</div>;
}
