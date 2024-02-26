"use client";

import { useMutation, useQuery } from "@tanstack/react-query";

import { getTest, postTest } from "@/lib/api/Test/test";
import { TEST_KEY } from "@/lib/api/queryKeys";

const useMainModel = () => {
  const { data, isLoading } = useQuery({
    queryKey: [TEST_KEY.GET],
    queryFn: getTest,
    staleTime: 5 * 1000,
    // suspense: true,
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationKey: [TEST_KEY.POST],
    mutationFn: async (data: string) => postTest({ data }),
    onSuccess: (data) => console.log("POST SUCCESS:", data),
  });

  return { data, isLoading, mutation };
};

export default useMainModel;
