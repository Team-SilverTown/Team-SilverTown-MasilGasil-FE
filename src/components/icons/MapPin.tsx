interface MapPinProp {
  pinIndex?: number;
  size?: number;
  fill?: string;
  fontColor?: string;
  onClick?: () => {};
  isSelected?: boolean;
  selectColor?: string;
}

const MapPin = ({
  fill = "black",
  size = 28,
  fontColor = "black",
  pinIndex,
  onClick,
  selectColor = "red",
  isSelected = false,
}: MapPinProp) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isSelected ? selectColor : fill}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick && onClick}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.54 22.351L11.61 22.391L11.638 22.407C11.749 22.467 11.8733 22.4985 11.9995 22.4985C12.1257 22.4985 12.25 22.467 12.361 22.407L12.389 22.392L12.46 22.351C12.8511 22.1191 13.2328 21.8716 13.604 21.609C14.5651 20.9305 15.463 20.1667 16.287 19.327C18.231 17.337 20.25 14.347 20.25 10.5C20.25 8.31196 19.3808 6.21354 17.8336 4.66637C16.2865 3.11919 14.188 2.25 12 2.25C9.81196 2.25 7.71354 3.11919 6.16637 4.66637C4.61919 6.21354 3.75 8.31196 3.75 10.5C3.75 14.346 5.77 17.337 7.713 19.327C8.53664 20.1667 9.43427 20.9304 10.395 21.609C10.7666 21.8716 11.1485 22.1191 11.54 22.351ZM12 13.5C12.7956 13.5 13.5587 13.1839 14.1213 12.6213C14.6839 12.0587 15 11.2956 15 10.5C15 9.70435 14.6839 8.94129 14.1213 8.37868C13.5587 7.81607 12.7956 7.5 12 7.5C11.2044 7.5 10.4413 7.81607 9.87868 8.37868C9.31607 8.94129 9 9.70435 9 10.5C9 11.2956 9.31607 12.0587 9.87868 12.6213C10.4413 13.1839 11.2044 13.5 12 13.5Z"
        fill={isSelected ? selectColor : fill}
        stroke={isSelected ? selectColor : fill}
        strokeWidth={3}
      />
      <circle
        cx="12"
        cy="11"
        r="6"
        fill="white"
      />
      {pinIndex && (
        <text
          x="12"
          y="12"
          text-anchor="middle"
          dominant-baseline="middle"
          fontWeight={700}
          fontSize={8}
          fill={fontColor}
        >
          {pinIndex}
        </text>
      )}
    </svg>
  );
};

export default MapPin;
