import LogController from "./Log.controller";

interface LogDetailProps {
  params: {
    id: string;
  };
}

const LogDetail = ({ params }: LogDetailProps) => {
  const { id } = params;

  return <LogController logId={id} />;
};

export default LogDetail;
