import React from 'react';

const starShapes = [
  'rounded-full shadow-sm',
  'rotate-45 shadow-sm',
  'star-cross shadow-md',
  'shadow-md blur-sm',
  'scale-125 opacity-75  shadow-sm',
];

type StarfieldProps = {
  darkMode?: boolean;
  starCount?: number;
  nebulaCount?: number;
};

const Starfield: React.FC<StarfieldProps> = ({
  darkMode = false,
  starCount = 60,
  nebulaCount = 3,
}) => {
  // Stars
  const stars = Array.from({ length: starCount }, (_, i) => {
    const size = Math.random() * 3 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 6;
    const duration = 8 + Math.random() * 8;
    const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
    const shape = starShapes[Math.floor(Math.random() * starShapes.length)];

    return (
      <div
        key={`star-${i}`}
        className={`star absolute ${
          darkMode ? 'bg-white shadow-white/40' : 'bg-black shadow-black/40'
        } ${shape}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          animationDirection: direction,
        }}
      />
    );
  });

  // Random nebula blobs
  const colors = darkMode
    ? ['bg-purple-500', 'bg-pink-500', 'bg-blue-500', 'bg-indigo-500']
    : ['bg-purple-800', 'bg-pink-800', 'bg-blue-800', 'bg-indigo-800'];

  const nebula = Array.from({ length: nebulaCount }, (_, i) => {
    const size = 300 + Math.random() * 400;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 4;

    return (
      <div
        key={`nebula-${i}`}
        className={`nebula absolute rounded-full blur-2xl opacity-10 ${color}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {stars}
      {nebula}
    </div>
  );
};

export default Starfield;
