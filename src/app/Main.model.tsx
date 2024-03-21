"use client";

import { useMutation } from "@tanstack/react-query";

import { TEST_KEY, USER_KEY } from "@/lib/api/queryKeys";
import { getAuthToken } from "@/lib/api/User/client";
import useEventQuery from "@/lib/hooks/useEventQuery";

const useMainModel = () => {
  const { data, isLoading, refetch } = useEventQuery({
    key: [USER_KEY.AUTH],
    queryFn: getAuthToken,
    // staleTime: 5 * 1000,
    // suspense: true,
  });

  return { data, isLoading, refetch };
};

export default useMainModel;
