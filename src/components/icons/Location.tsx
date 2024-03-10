const Location = ({ ...props }) => {
  return (
    <svg
      width="10"
      height="15"
      viewBox="0 0 10 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 0C2.23571 0 0 2.3475 0 5.25C0 6.555 0.357143 7.7775 1.00714 8.88C1.68571 10.035 2.57857 11.025 3.26429 12.18C3.6 12.7425 3.84286 13.2675 4.1 13.875C4.28571 14.2875 4.43571 15 5 15C5.56429 15 5.71429 14.2875 5.89286 13.875C6.15714 13.2675 6.39286 12.7425 6.72857 12.18C7.41429 11.0325 8.30714 10.0425 8.98571 8.88C9.64286 7.7775 10 6.555 10 5.25C10 2.3475 7.76429 0 5 0ZM5 7.3125C4.01429 7.3125 3.21429 6.4725 3.21429 5.4375C3.21429 4.4025 4.01429 3.5625 5 3.5625C5.98571 3.5625 6.78571 4.4025 6.78571 5.4375C6.78571 6.4725 5.98571 7.3125 5 7.3125Z"
        fill="#1E1E1E"
      />
    </svg>
  );
};

export default Location;
