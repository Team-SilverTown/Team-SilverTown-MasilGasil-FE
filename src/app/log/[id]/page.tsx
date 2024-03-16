import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getMasilDetail } from "@/lib/api/masil/server";
import LogController from "./Log.controller";

interface LogDetailProps {
  params: {
    id: string;
  };
}

const LogDetail = async ({ params }: LogDetailProps) => {
  const { id } = params;

  const session = await getServerSession(authOptions);
  const masilData = await getMasilDetail(session?.serviceToken!, id);

  if (!masilData) return;

  return (
    <LogController
      logId={id}
      masilData={masilData}
    />
  );
};

export default LogDetail;
