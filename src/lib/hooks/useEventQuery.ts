import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";

export const useEventQuery = <T>({
  key,
  queryFn,
  onSuccessFn,
}: {
  key: string[];
  queryFn: Function;
  onSuccessFn?: (data: any) => void;
}) => {
  const { data, isLoading, isError, error, refetch } = useQuery<T>({
    queryKey: key,
    queryFn: async () => await queryFn(),
    enabled: false,
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    onSuccessFn && onSuccessFn(data);
  }, [data]);

  return { data, isLoading, isError, error, refetch };
};

export default useEventQuery;
