import axios from "axios";

const url = "https://fakestoreapi.com/products/";

export const handleGetProduct = async (id: string) => {
  const res = await axios.get(url + id);

  const { data, status } = res;

  return {
    product: data,
    statusCode: status,
  };
};
