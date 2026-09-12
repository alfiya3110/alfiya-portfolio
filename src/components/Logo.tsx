import { useId } from 'react';

type LogoProps = {
  className?: string;
  size?: number;
};

export default function Logo({ className = '', size = 40 }: LogoProps) {
  const gradientId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#79b8b4" />
          <stop stopColor="#a7d8d3" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="#0d1b2a" stroke={`url(#${gradientId})`} strokeWidth="1.5" />
      <text
        x="11"
        y="27"
        fill="#f8f3e7"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="16"
        fontWeight="700"
      >
        A
      </text>
      <text
        x="23"
        y="27"
        fill="#a7d8d3"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="16"
        fontWeight="700"
      >
        Z
      </text>
    </svg>
  );
}
