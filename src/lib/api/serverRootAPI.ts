import { cookies } from "next/headers";

export const request = async <T>(url: string, options: RequestInit): Promise<T | undefined> => {
  return fetch(`${process.env.DB_BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
      // return undefined;
    }
    return response.json();
  });
  // .catch((error) => console.error(`API ERROR - status ${error}`));

  // try {
  //   const response = await fetch(`${process.env.DB_BASE_URL}${url}`, {
  //     ...options,
  //     headers: {
  //       "Content-Type": "application/json",
  //       ...(options.headers || {}),
  //     },
  //   });

  //   console.log(response);

  //   if (response.ok) {
  //     return await response.json();
  //   }

  //   throw new Error(`API ERROR - status ${response.status}`);
  // } catch (error) {
  //   console.log(error);
  //   return undefined;
  // }
};

export const GET = async <T>({
  endPoint,
  options,
}: {
  endPoint: string;
  options?: RequestInit;
}) => {
  return await request<T>(endPoint, { method: "GET", ...options });
};

export const POST = async <T>({
  endPoint,
  data,
  options,
}: {
  endPoint: string;
  data?: unknown;
  options?: RequestInit;
}): Promise<T | undefined> => {
  return await request<T>(endPoint, { method: "POST", body: JSON.stringify(data), ...options });
};
