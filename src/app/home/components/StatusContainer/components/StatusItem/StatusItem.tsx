interface StatusItemProp {
  icon: string | null;
  label: string | undefined | null;
}

const StatusItem = ({ icon, label }: StatusItemProp) => {
  return (
    <section className="flex select-none gap-2 ">
      <span>{icon}</span>
      <span className="max-w-60 truncate text-medium font-bold text-[#464646]">{label}</span>
    </section>
  );
};

export default StatusItem;
