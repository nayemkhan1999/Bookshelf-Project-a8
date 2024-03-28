import tow200 from "../../../public/tow200.jpg";
const BuyBook = () => {
  return (
    <div>
      <div className="lg:mx-16 md:mx-2 font-work mt-3">
        <div
          style={{
            backgroundImage: `url(${tow200})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="hero h-[85vh]  bg-[#F2F2F2] rounded-xl"
        >
          <div className="hero-content flex-col lg:flex-row-reverse gap-20">
            <div className="">
              <button className="btn btn-active text-white font-semibold bg-gray-800 border-none mt-96 text-lg">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyBook;
