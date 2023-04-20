const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center h-[3rem] bg-[#08415C] text-[#fff] md:fixed md:bottom-0">
      <p>
        @ All right reserve - Fake Store Api &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
