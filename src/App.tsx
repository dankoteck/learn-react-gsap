import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";

import "./App.css";

function App() {
  const app = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2, yoyo: true });

      const boxes = document.querySelectorAll(".box");

      boxes.forEach((box) => {
        tl.to(box, {
          rotation: 90,
          opacity: 0,
        });
      });
    }, app);

    return () => ctx.revert();
  });

  return (
    <div className="App" ref={app}>
      <div className="box green"></div>
      <div className="box red"></div>
      <div className="box blue"></div>
      <div className="box yellow"></div>
      <div className="box pink"></div>
      <div className="box orange"></div>
      <div className="box purple"></div>
    </div>
  );
}

export default App;
