import React, { useMemo } from 'react';

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

type StarConfig = {
  id: string;
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
  direction: 'normal' | 'reverse';
  shape: string;
};

type NebulaConfig = {
  id: string;
  size: number;
  top: number;
  left: number;
  delay: number;
  color: string;
};

const createRng = (seed: number) => {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296;
  };
};

const Starfield: React.FC<StarfieldProps> = ({
  darkMode = false,
  starCount = 60,
  nebulaCount = 3,
}) => {
  const seedBase = (darkMode ? 1 : 0) * 1000003 + starCount * 1009 + nebulaCount;

  const stars = useMemo<StarConfig[]>(() => {
    const random = createRng(seedBase + 17);
    return Array.from({ length: starCount }, (_, i) => ({
      id: `star-${i}`,
      size: random() * 3 + 1,
      top: random() * 100,
      left: random() * 100,
      delay: random() * 6,
      duration: 8 + random() * 8,
      direction: random() > 0.5 ? 'normal' : 'reverse',
      shape: starShapes[Math.floor(random() * starShapes.length)],
    }));
  }, [seedBase, starCount]);

  const nebula = useMemo<NebulaConfig[]>(() => {
    const random = createRng(seedBase + 31);
    const colors = darkMode
      ? ['bg-purple-500', 'bg-pink-500', 'bg-blue-500', 'bg-indigo-500']
      : ['bg-purple-800', 'bg-pink-800', 'bg-blue-800', 'bg-indigo-800'];

    return Array.from({ length: nebulaCount }, (_, i) => ({
      id: `nebula-${i}`,
      size: 300 + random() * 400,
      top: random() * 100,
      left: random() * 100,
      delay: random() * 4,
      color: colors[Math.floor(random() * colors.length)],
    }));
  }, [darkMode, nebulaCount, seedBase]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star absolute ${
            darkMode ? 'bg-white shadow-white/40' : 'bg-black shadow-black/40'
          } ${star.shape}`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            animationDirection: star.direction,
          }}
        />
      ))}
      {nebula.map((blob) => (
        <div
          key={blob.id}
          className={`nebula absolute rounded-full blur-2xl opacity-10 ${blob.color}`}
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            top: `${blob.top}%`,
            left: `${blob.left}%`,
            animationDelay: `${blob.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
