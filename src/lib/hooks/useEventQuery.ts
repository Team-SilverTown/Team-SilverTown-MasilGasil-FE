import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useEventQuery = ({
  key,
  queryFn,
  onSuccessFn,
}: {
  key: string[];
  queryFn: Function;
  onSuccessFn?: (data: any) => void;
}) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: key,
    queryFn: async () => await queryFn(),
    enabled: false,
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    onSuccessFn && onSuccessFn(data?.data);
  }, [data]);

  return { data, isLoading, refetch };
};

export default useEventQuery;
