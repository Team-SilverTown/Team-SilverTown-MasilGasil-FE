"use client";

import { useMutation, useQuery } from "@tanstack/react-query";

import { postTest } from "@/lib/api/Test/test";
import { TEST_KEY, USER_KEY } from "@/lib/api/queryKeys";
import { getAuthToken } from "@/lib/api/User/client";
import useEventQuery from "@/lib/hooks/useEventQuery";

const useMainModel = () => {
  const { data, isLoading, refetch } = useEventQuery({
    key: [USER_KEY.AUTH],
    queryFn: getAuthToken,
    onSuccessFn: (data) => {},
  });

  const mutation = useMutation({
    mutationKey: [TEST_KEY.POST],
    mutationFn: async (data: string) => postTest({ data }),
    onSuccess: (data) => {},
  });

  return { data, isLoading, refetch, mutation };
};

export default useMainModel;
