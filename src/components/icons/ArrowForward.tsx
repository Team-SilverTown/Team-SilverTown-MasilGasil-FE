import { CSSProperties } from "react";

interface ArrowForwardProps {
  size?: number;
  style?: CSSProperties;
  className?: string;
  fill?: string;
}

const ArrowForward = ({ size = 24, style, className, fill }: ArrowForwardProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      style={style}
      className={className}
      fill={fill}
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  );
};

export default ArrowForward;
