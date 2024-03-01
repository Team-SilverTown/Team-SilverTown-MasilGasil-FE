interface DividerProps {
  isColumn?: boolean;
}

const Divider = ({ isColumn = false }: DividerProps) => {
  const columnStyle = "w-1 h-full";
  const rowStyle = "w-full h-1";

  return <div className={`${isColumn ? columnStyle : rowStyle} rounded bg-[#E3E3E3]`} />;
};

export default Divider;
