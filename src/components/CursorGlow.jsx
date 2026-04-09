import { useEffect } from "react";

const CursorGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.classList.add("cursor-glow");
    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      glow.remove();
    };
  }, []);

  return null;
};

export default CursorGlow;
