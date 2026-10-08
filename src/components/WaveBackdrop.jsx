export const HeroWaves = () => (
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 1440 800"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="kreshaCyanWave" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#159BD7" />
        <stop offset="1" stopColor="#0E86BE" />
      </linearGradient>
      <linearGradient id="kreshaSunWave" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FFBD19" />
        <stop offset="1" stopColor="#FFCA3D" />
      </linearGradient>
    </defs>
    <path d="M0 0 H260 C180 40 90 62 0 74 Z" fill="url(#kreshaCyanWave)" />
    <path d="M0 300 L132 352 L0 412 Z" fill="url(#kreshaSunWave)" />
    <path d="M0 800 V620 C120 700 205 758 255 800 Z" fill="url(#kreshaCyanWave)" />
    <path d="M1440 800 V500 C1290 620 1120 720 960 800 Z" fill="url(#kreshaSunWave)" />
  </svg>
);

export const SectionWaves = () => (
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 1440 600"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <path d="M1440 0 V120 C1380 70 1320 30 1260 0 Z" fill="#159BD7" opacity="0.12" />
    <path d="M0 600 V500 C60 540 110 575 150 600 Z" fill="#FFBD19" opacity="0.16" />
  </svg>
);
