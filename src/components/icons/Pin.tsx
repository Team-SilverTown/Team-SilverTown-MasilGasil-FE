interface PinProps {
  size?: number | string;
  fill?: string;
}

const Pin = ({ size = 24, fill = "black" }: PinProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 28"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4 9.8V2.8H16.8C17.57 2.8 18.2 2.17 18.2 1.4C18.2 0.63 17.57 0 16.8 0H2.8C2.03 0 1.4 0.63 1.4 1.4C1.4 2.17 2.03 2.8 2.8 2.8H4.2V9.8C4.2 12.124 2.324 14 0 14V16.8H8.358V26.6L9.758 28L11.158 26.6V16.8H19.6V14C17.276 14 15.4 12.124 15.4 9.8Z"
        fill={fill}
      />
    </svg>
  );
};

export default Pin;
