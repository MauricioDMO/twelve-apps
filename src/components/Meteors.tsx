"use client";
 
import { useEffect, useState } from "react";
  
interface MeteorsProps {
  number?: number;
  rotation?: number;
}
export const Meteors = ({ number = 20, rotation = 35 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );
 
  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      animationFillMode: "both",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      animationDelay: Math.floor(Math.random() * 5) + "s",
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      top: Math.floor(Math.random() * window.innerHeight) + "px",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);
 
  return (
    <>
      <style>{`
      @keyframes meteor {
        0% {
          transform: rotate(${rotation}deg) translateX(-250px);
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        70% {
          opacity: 1;
        }
        100% {
          transform: rotate(${rotation}deg) translateX(250px);
          opacity: 0;
        }
      }
      `}</style>
      {[...meteorStyles].map((style, i) => (
        // Meteor Head
        <span
          key={i}
          className={
            "pointer-events-none absolute size-0.5 animate-[meteor] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] z-0"
          }
          style={style}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 right-0 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-transparent to-slate-500" />
        </span>
      ))}
    </>
  );
};
 
export default Meteors;