interface DividerProps {
  isColumn?: boolean;
  color?: string;
}

const Divider = ({ isColumn = false, color = "#E3E3E3" }: DividerProps) => {
  const columnStyle = "w-1 h-full";
  const rowStyle = "w-full h-1";

  return <div className={`${isColumn ? columnStyle : rowStyle} rounded bg-[${color}]`} />;
};

export default Divider;
