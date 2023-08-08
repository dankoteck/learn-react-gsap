import { useRef } from "react";
import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "../helpers";

export default function ToggleTimeline() {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();

  const toggle = () => {
    tl.current?.reversed(!tl.current.reversed());
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = document.querySelectorAll(".box");

      tl.current = gsap
        .timeline()
        .to(boxes[0], { rotation: 90, x: 140 })
        .to(boxes[1], { rotation: -90, x: -140 })
        .to(boxes[2], { y: -200 })
        .reverse();
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center" ref={container}>
      <h1 className="text-4xl font-semibold">
        Toggle the timeline step by step Demo
      </h1>

      <button
        onClick={toggle}
        className="font-semibold rounded-md border border-slate-200 px-4 py-1 text-center"
      >
        Toggle timeline
      </button>

      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="box w-28 h-28 flex items-center justify-center bg-green-500 rounded-md text-white font-semibold text-xl"
        >
          Box {i}
        </div>
      ))}
    </div>
  );
}
