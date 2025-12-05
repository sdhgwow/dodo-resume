interface CheckIconProps {
  width?: number;
  height?: number;
  className?: string;
  stroke?: string;
}

export function CheckIcon({ 
  width = 20, 
  height = 20, 
  className = '',
  stroke = '#ff6900' 
}: CheckIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

