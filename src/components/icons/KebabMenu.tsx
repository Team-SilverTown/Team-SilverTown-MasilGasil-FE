import { CSSProperties } from "react";

interface KebabMenuProps {
  style?: CSSProperties;
}

const KebabMenu = ({ style, ...props }: KebabMenuProps) => {
  return (
    <svg
      width="3"
      height="12"
      viewBox="0 0 3 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...style }}
      {...props}
    >
      <path
        d="M3 6.00078C3 5.00667 2.32843 4.20078 1.5 4.20078C0.671573 4.20078 0 5.00667 0 6.00078C0 6.99489 0.671573 7.80078 1.5 7.80078C2.32843 7.80078 3 6.99489 3 6.00078Z"
        fill="#232323"
      />
      <path
        d="M3 1.79961C3 0.805497 2.32843 -0.000390053 1.5 -0.000390053C0.671573 -0.000390053 0 0.805497 0 1.79961C0 2.79372 0.671573 3.59961 1.5 3.59961C2.32843 3.59961 3 2.79372 3 1.79961Z"
        fill="#232323"
      />
      <path
        d="M3 10.2C3 9.20589 2.32843 8.4 1.5 8.4C0.671573 8.4 0 9.20589 0 10.2C0 11.1941 0.671573 12 1.5 12C2.32843 12 3 11.1941 3 10.2Z"
        fill="#232323"
      />
    </svg>
  );
};

export default KebabMenu;
