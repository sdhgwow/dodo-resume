interface ArrowRightIconProps {
  width?: number;
  height?: number;
  className?: string;
  stroke?: string;
}

export function ArrowRightIcon({ 
  width = 20, 
  height = 20, 
  className = '',
  stroke = 'var(--color-accent)' 
}: ArrowRightIconProps) {
  return (
    <svg
      width={width}
      height={height}
      fill="#000000"
      viewBox="0 0 24 24"
      id="right-arrow"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        id="primary"
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        style={{
          fill: "none",
          stroke,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <polyline
        id="primary-2"
        data-name="primary"
        points="18 15 21 12 18 9"
        style={{
          fill: "none",
          stroke,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
}

