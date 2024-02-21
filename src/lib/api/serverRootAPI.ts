export const request = async <T>(url: string, options = {}) => {
  try {
    const response = await fetch(
      `http://ec2-3-35-207-242.ap-northeast-2.compute.amazonaws.com${url}`,
      {
        ...options,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (response.ok) {
      return await response.json();
    }

    throw new Error(`API ERROR - status ${response.status}`);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const SERVER_GET = async <T>({ endPoint, config }: { endPoint: string; config?: any }) => {
  return await request<T>(endPoint, config);
};

// export const POST = async <T>(url:string, data) => {
//   return await request<T>(url, { method: "POST", body: JSON.stringify(data) });
// };
