import LogController from "./Log.controller";

const LogDetail = () => {
  const baseLocation = { lat: 37.15601397875854, lng: 127.07667498944193 };

  return <LogController baseLocation={baseLocation} />;
};

export default LogDetail;
