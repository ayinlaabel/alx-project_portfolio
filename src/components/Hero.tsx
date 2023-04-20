import { useEffect, useState } from "react";
import { handleGetCategories } from "../hooks/get-all-category";

const Hero = () => {
  const [categories, setCategories] = useState<string[]>();

  useEffect(() => {
    const getCategories = async () => {
      const { categories, statusCode } = await handleGetCategories(
        "categories"
      );

      if (statusCode === 200) {
        setCategories(categories);
      }
    };

    getCategories();
  }, [categories]);
  return (
    <div className="mt-9 mb-9">
      <div className="flex md:flex-row justify-between px-5 h-[16rem]">
        <div className="flex-none w-[15rem] border-[1px] border-[#A3A3A3] mx-5 rounded-[10px]">
          <div className="">
            <div className="rounded-tl-lg rounded-tr-lg h-[3rem] bg-[#08415C] flex items-center justify-center font-bold text-white">
              <p>All Categories</p>
            </div>
            <div>
              {categories?.map((category) => (
                <div className="flex flex-col justify-center capitalize h-[3rem] hover:bg-[#F9F9F9] px-3">
                  <a href={"" + category} className="">
                    {category}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-none w-fit overflow-hidden rounded-[10px]">
          <img
            src={process.env.PUBLIC_URL + "/ads.jpg"}
            alt="ads"
            className="rounded-[10px] w-fit object-cover overflow-hidden"
          />
        </div>
        <div className="h-full w-[20rem] overflow-hidden px-3">
          <img src={process.env.PUBLIC_URL + "/ads2.jpg"} alt="ads 2" className="h-full w-full overflow-hidden object-cover rounded-[10px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
