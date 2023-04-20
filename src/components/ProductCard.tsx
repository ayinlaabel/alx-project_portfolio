const ProductCard = ({ title, imgurl, price, id }: any) => {
  const baseUrl = "https://fakestoreapi.com/products/";
  return (
    <div className="h-[20rem] w-[15rem] shadow-lg bg-[#fff] px-4 my-2 rounded-[10px] mx-2 relative">
      <a href={"products/" + id}>
        <div className="h-[15rem] w-full overflow-hidden flex items-center justify-center py-[20px]">
          <img src={imgurl} alt={title} className="h-full" />
        </div>
        <div className="text-center font-bold mt-2 text-[12px]">
          <h1 className="truncate ...">{title}</h1>
        </div>
        <div className="mt-3">
          <p className="text-center">{"$ " + price}</p>
          <p className="text-center line-through text-[10px]">
            {"$ " + (price / (3 / 4)).toFixed(1)}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
