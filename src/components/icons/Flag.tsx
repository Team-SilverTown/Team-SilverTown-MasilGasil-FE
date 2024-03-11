import { OnClickPin } from "../MasilMap/MasilMap.types";

interface FlagProps {
  size?: number;
  fill?: string;

  onClick?: OnClickPin;
  pinIndex?: number;
}

const Flag = ({ size = 24, fill = "black", onClick, pinIndex }: FlagProps) => {
  const handleClick = () => {
    if (onClick && pinIndex !== undefined) {
      onClick(pinIndex);
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      fill={fill}
      viewBox="0 -960 960 960"
      onClick={handleClick}
    >
      <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z" />
    </svg>
  );
};

export default Flag;
