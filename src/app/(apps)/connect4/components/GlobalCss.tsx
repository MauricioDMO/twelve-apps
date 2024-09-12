"use client";

// This is a global CSS file that is used to animate the tokens in the game.
// It is used in the Token component to animate the tokens when they are dropped.
// This is because @keyframes cannot be imported from a CSS file.
// I don't know why this is necessary, but it is.
  
export function GlobalCss() {
  return <style jsx global>{`
    .animate {
      animation: drop var(--fall) linear(0 0%, 0 2.27%, 0.02 4.53%, 0.04 6.8%, 0.06 9.07%,
          0.1 11.33%, 0.14 13.6%, 0.25 18.15%, 0.39 22.7%, 0.56 27.25%, 0.77 31.8%, 1 36.35%,
          0.89 40.9%, 0.85 43.18%, 0.81 45.45%, 0.79 47.72%, 0.77 50%, 0.75 52.27%, 0.75 54.55%,
          0.75 56.82%, 0.77 59.1%, 0.79 61.38%, 0.81 63.65%, 0.85 65.93%, 0.89 68.2%, 1 72.7%,
          0.97 74.98%, 0.95 77.25%, 0.94 79.53%, 0.94 81.8%, 0.94 84.08%, 0.95 86.35%, 0.97 88.63%,
          1 90.9%, 0.99 93.18%, 0.98 95.45%, 0.99 97.73%, 1 100%);
    }

    @keyframes drop {
      0% {
        transform: translateY(var(--start));
      }

      100% {
        transform: translateY(0);
      }
    }

    @property --fall {
      syntax: "<time>";
      inherits: true;
      initial-value: 1s;
    }

    @property --start {
      syntax: "<percentage>";
      inherits: true;
      initial-value: 0%;
    }
  `}</style>
}