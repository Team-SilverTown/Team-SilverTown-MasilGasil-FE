interface StatisticItemProps {
  icon: string;
  label: string;
  value: string;
}
const StatisticItem = ({ icon, label, value }: StatisticItemProps) => {
  return (
    <div className="flex flex-shrink-0 flex-grow-0 gap-2 rounded-[3rem] bg-white bg-opacity-30 px-9 py-4 shadow-[inset_0px_0px_0px_2px_rgba(255,255,255,0.3)]">
      <span className="flex gap-5 text-large text-white">{icon} 총</span>
      <span className="flex gap-5 text-large font-bold text-white">{value}</span>
      <span className="flex gap-5 text-large text-white">{label}</span>
    </div>
  );
};

export default StatisticItem;
