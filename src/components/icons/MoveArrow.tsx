import React from "react";
import { CSSProperties } from "react";

interface MoveArrorProps {
  style?: CSSProperties;
}

const MoveArrow = ({ style, ...props }: MoveArrorProps) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...style }}
      {...props}
    >
      <circle
        cx="11.5"
        cy="11.5"
        r="11.5"
        fill="#FAFAFA"
      />
      <path
        d="M10.4764 4.83406L10.4764 4.83405L10.4737 4.83137C10.2577 4.62173 9.96968 4.50215 9.66754 4.50003C9.36553 4.49791 9.07593 4.61333 8.85712 4.81984C8.74486 4.92561 8.65565 5.05316 8.59447 5.19428C8.53323 5.3355 8.50119 5.48765 8.50003 5.64139C8.49887 5.79514 8.52861 5.94774 8.58768 6.08987C8.64649 6.23136 8.73328 6.35982 8.8433 6.46705L13.8655 11.4167L13.8655 11.4168L13.8684 11.4195C13.8807 11.4315 13.8911 11.4465 13.8984 11.4639C13.9058 11.4813 13.9097 11.5005 13.9097 11.5202C13.9097 11.5398 13.9058 11.559 13.8984 11.5764C13.8911 11.5938 13.8807 11.6088 13.8684 11.6208L13.8684 11.6208L13.8655 11.6236L8.88349 16.5342C8.77454 16.6402 8.68833 16.7671 8.62953 16.9069C8.57042 17.0475 8.54009 17.1984 8.54009 17.3507C8.54009 17.503 8.57042 17.6539 8.62953 17.7944C8.6884 17.9344 8.77475 18.0614 8.88388 18.1676C9.33601 18.611 10.0643 18.6112 10.5159 18.166C10.5159 18.166 10.5159 18.1659 10.5159 18.1659L15.9637 12.7959C16.1336 12.6305 16.2684 12.4323 16.3604 12.2134C16.4526 11.9939 16.5 11.758 16.5 11.5198C16.5 11.2817 16.4526 11.0457 16.3604 10.8262C16.2684 10.6074 16.1337 10.4092 15.9637 10.2438L10.4764 4.83406Z"
        fill="#D9D9D9"
        stroke="#D9D9D9"
      />
    </svg>
  );
};

export default MoveArrow;

// const KebabMenu = ({ style, ...props }: KebabMenuProps) => {
//   return (
//     <svg
//       width="3"
//       height="12"
//       viewBox="0 0 3 12"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
// style={{ ...style }}
// {...props}
//     >
//       <path
//         d="M3 6.00078C3 5.00667 2.32843 4.20078 1.5 4.20078C0.671573 4.20078 0 5.00667 0 6.00078C0 6.99489 0.671573 7.80078 1.5 7.80078C2.32843 7.80078 3 6.99489 3 6.00078Z"
//         fill="#232323"
//       />
//       <path
//         d="M3 1.79961C3 0.805497 2.32843 -0.000390053 1.5 -0.000390053C0.671573 -0.000390053 0 0.805497 0 1.79961C0 2.79372 0.671573 3.59961 1.5 3.59961C2.32843 3.59961 3 2.79372 3 1.79961Z"
//         fill="#232323"
//       />
//       <path
//         d="M3 10.2C3 9.20589 2.32843 8.4 1.5 8.4C0.671573 8.4 0 9.20589 0 10.2C0 11.1941 0.671573 12 1.5 12C2.32843 12 3 11.1941 3 10.2Z"
//         fill="#232323"
//       />
//     </svg>
//   );
// };

// export default KebabMenu;