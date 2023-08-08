import "./App.css";

import { useRef } from "react";

import gsap from "gsap";

import { useIsomorphicLayoutEffect } from "./helpers";
import ToggleTimeline from "./components/ToggleTimeline";
import LayersTransition from "./components/LayersTransition";

function App() {
  const app = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {}, app);

    return () => ctx.revert();
  });

  return (
    <div className="App" ref={app}>
      <ToggleTimeline />
      <LayersTransition />
    </div>
  );
}

export default App;
