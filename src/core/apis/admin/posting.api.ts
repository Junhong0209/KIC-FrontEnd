import { request } from "src/core/lib/CustomAxios";

export const handleAddNewPost = async (req: object) => {
  const url: string = "/post";
  const axiosConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const { data } = await request.post(url, req, axiosConfig);

  return data;
};

export const handleGetPost = async () => {
  const url: string = "/post";
  const { data } = await request.get(url);

  return data;
};

export const handleUpdatePost = async (req: object) => {
  const url: string = "/post";
  const { data } = await request.put(url, req);

  return data;
};
