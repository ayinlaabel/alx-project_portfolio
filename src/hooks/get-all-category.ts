import axios from "axios";

const baseUrl = "https://fakestoreapi.com/products/";

export const handleGetCategories = async (url: string) => {
  const res = await axios.get(baseUrl + url);

  const { data, status } = res;

  return {
    categories: data,
    statusCode: status,
  };
};
