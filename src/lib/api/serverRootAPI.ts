export const request = async <T>(url: string, options: RequestInit): Promise<T | undefined> => {
  return fetch(`${process.env.DB_BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(`API ERROR - status ${error}`));

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

export const SERVER_GET = async <T>({ endPoint, config }: { endPoint: string; config?: any }) => {
  return await request<T>(endPoint, config);
};

export const POST = async <T>(url: string, data: any, options?: any): Promise<T | undefined> => {
  return await request<T>(url, { method: "POST", body: JSON.stringify(data) });
};
