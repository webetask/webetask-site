// Small stroke icons. Decorative by default (aria-hidden).
type P = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

export const ArrowRight = ({ size = 16 }: P) => (
  <svg {...base(size)}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);
export const Plus = ({ size = 15 }: P) => (
  <svg {...base(size)} strokeWidth={2.6}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);
export const Check = ({ size = 14 }: P) => (
  <svg {...base(size)} strokeWidth={3}>
    <path d="M5 12l5 5L20 7" />
  </svg>
);
export const Menu = ({ size = 18 }: P) => (
  <svg {...base(size)} strokeWidth={2}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
);
export const Close = ({ size = 18 }: P) => (
  <svg {...base(size)} strokeWidth={2}>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </svg>
);
export const Folder = ({ size = 18 }: P) => (
  <svg {...base(size)} strokeWidth={2}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
export const Columns = ({ size = 20 }: P) => (
  <svg {...base(size)} strokeWidth={2}>
    <rect x="3" y="3" width="5" height="18" rx="1.5" />
    <rect x="10" y="3" width="5" height="12" rx="1.5" />
    <rect x="17" y="3" width="4" height="8" rx="1.5" />
  </svg>
);
export const Bell = ({ size = 20 }: P) => (
  <svg {...base(size)} strokeWidth={2}>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </svg>
);
export const Users = ({ size = 20 }: P) => (
  <svg {...base(size)} strokeWidth={2}>
    <circle cx="9" cy="8" r="4" />
    <path d="M2 21a7 7 0 0 1 14 0" />
    <path d="M19 8v6" />
    <path d="M16 11h6" />
  </svg>
);
export const Download = ({ size = 20 }: P) => (
  <svg {...base(size)} strokeWidth={2}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
);
export const Shuffle = ({ size = 20 }: P) => (
  <svg {...base(size)} strokeWidth={2}>
    <path d="M16 3h5v5" />
    <path d="M21 3l-7 7" />
    <path d="M8 21H3v-5" />
    <path d="M3 21l7-7" />
  </svg>
);
export const Calendar = ({ size = 20 }: P) => (
  <svg {...base(size)} strokeWidth={2}>
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <path d="M3 10h18" />
    <path d="M8 2v4" />
    <path d="M16 2v4" />
  </svg>
);
