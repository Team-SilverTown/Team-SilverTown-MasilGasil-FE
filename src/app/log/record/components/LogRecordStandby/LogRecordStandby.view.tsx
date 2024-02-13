interface LogRecordStandbyViewProps {
  onClick: () => void;
}

const LogRecordStandbyView = ({ onClick }: LogRecordStandbyViewProps) => {
  return (
    <>
      LogRecordStandby.view
      <button onClick={onClick}> setWatchCode</button>
    </>
  );
};

export default LogRecordStandbyView;
