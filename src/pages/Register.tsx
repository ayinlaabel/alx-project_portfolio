const Register = () => {
  return (
    <div className="md:h-[32.2rem] w-full flex items-center justify-center">
      <div className="md:w-[40rem] md:h-fit pb-4 rounded-[10px] border-[1px] border-[#08415C]">
        <div className="bg-[#08415C] mb-3 h-[3rem] flex justify-center items-center text-[#fff] text-[24px] font-bold rounded-tr-[10px] rounded-tl-[10px]">
          <p>User Registration</p>
        </div>
        <form className="flex flex-col px-3 ">
          <div className="flex ">
            <div className="w-full h-[3rem] rounded-[10px] mb-3 flex  mr-3">
              <div className="w-[4rem] bg-[#08415C] h-full rounded-l-[10px] text-white flex items-center justify-center">
                <i className="fa-solid fa-user"></i>
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="firstname"
                className="rounded-r-[10px] h-full w-full px-3 border-[1px] border-[#08415C]"
              />
            </div>
            <div className="w-full h-[3rem] rounded-[10px] mb-3 flex ">
              <div className="w-[4rem] bg-[#08415C] h-full rounded-l-[10px] text-white flex items-center justify-center">
                <i className="fa-solid fa-user"></i>
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="lastname"
                className="rounded-r-[10px] h-full w-full px-3 border-[1px] border-[#08415C]"
              />
            </div>
          </div>
          <div className="w-full h-[3rem] rounded-[10px] mb-3 flex ">
            <div className="w-[4rem] bg-[#08415C] h-full rounded-l-[10px] text-white flex items-center justify-center">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="email"
              className="rounded-r-[10px] h-full w-full px-3 border-[1px] border-[#08415C]"
            />
          </div>
          <div className="w-full h-[3rem] rounded-[10px] mb-3 flex ">
            <div className="w-[4rem] bg-[#08415C] h-full rounded-l-[10px] text-white flex items-center justify-center">
              <i className="fa-solid fa-user"></i>
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="username"
              className="rounded-r-[10px] h-full w-full px-3 border-[1px] border-[#08415C]"
            />
          </div>
          <div className="w-full h-[3rem] rounded-[10px] mb-3 flex ">
            <div className="w-[4rem] bg-[#08415C] h-full rounded-l-[10px] text-white flex items-center justify-center">
              <i className="fa-solid fa-lock"></i>
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="password"
              className="rounded-r-[10px] h-full w-full px-3 border-[1px] border-[#08415C]"
            />
          </div>
          <button className="bg-[#08415C] p-3 rounded-[10px] text-white font-medium">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
