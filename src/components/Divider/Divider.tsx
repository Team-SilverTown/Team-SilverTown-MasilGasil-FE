import { CSSProperties } from "react";

interface DividerProps {
  isColumn?: boolean;
  style?: CSSProperties;
}

const Divider = ({ isColumn = false, style }: DividerProps) => {
  const columnStyle = "w-1 min-w-1 h-full";
  const rowStyle = "w-full min-h-1 h-1";

  return (
    <div
      style={style}
      className={`${isColumn ? columnStyle : rowStyle} rounded bg-[#E3E3E3]`}
    />
  );
};

export default Divider;
