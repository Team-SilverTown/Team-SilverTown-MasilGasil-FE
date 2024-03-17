export const request = async <T>(url: string, options: RequestInit): Promise<T | undefined> => {
  return fetch(`${process.env.DB_BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  }).then((response) => {
    if (!response.ok) {
      return;
    }
    return response.json();
  });
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
