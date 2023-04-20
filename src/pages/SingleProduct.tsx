import { useEffect, useState } from "react";
import { useNavigation, useParams } from "react-router-dom";
import { handleGetProduct } from "../hooks/get-single-product";
import { product } from "../types/product";

const SingleProdocut = ({ route }: any) => {
  const [product, setProduct] = useState<product>();
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { product, statusCode } = await handleGetProduct(id || "");

      if (statusCode === 200) {
        setProduct(product);
      } else {
        window.open("/");
      }
    };

    getProduct();
  }, [product]);
  return (
    <div className="h-fit md:h-[30rem] mt-5 mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="py-[20px] md:flex-1 flex items-center justify-center border-1 h-[20rem] md:h-[30rem] w-full overflow-hidden">
          <img
            src={product?.image}
            alt={product?.title}
            className="h-full overflow-hidden"
          />
        </div>
        <div className="flex-1 px-9">
          <h1 className="text-center text-[18px] font-bold md:text-[24px] md:font-medium uppercase">
            {product?.title}
          </h1>
          <div className="mt-5 text-[16px]">
            <p className="mb-3">
              <span className="font-medium">Title: </span>
              {product?.title}
            </p>
            <p className="mb-3">
              <span className="font-medium">Category: </span>
              {product?.category}
            </p>
            <p className="mb-3">
              <span className="font-medium">Price: </span>{" "}
              {"$ " + product?.price}
            </p>
            <p className="mb-3">
              <span className="font-medium">Description: </span>
              {product?.description}
            </p>
          </div>
          <div className="flex justify-between mt-6">
            <button className="md:h-[3rem] w-[10rem] bg-[#08415C] text-white font-medium flex items-center justify-center">
              Buy
            </button>
            <button className="h-[3rem] w-[10rem] flex items-center justify-center bg-[#f9f9f9] hover:bg-[#08415C] hover:text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProdocut;
