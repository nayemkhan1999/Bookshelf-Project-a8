import one100 from "../../../public/one100.jpg";
const Library = () => {
  return (
    <div>
      <div className="lg:mx-16 md:mx-2 font-work mt-3">
        <div
          style={{
            backgroundImage: `url(${one100})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="hero h-[85vh]  bg-[#F2F2F2] rounded-xl"
        >
          <div className="hero-content flex-col lg:flex-row-reverse gap-20">
            <div className="">
              <h1 className="lg:text-6xl text-3xl font-bold mb-8 text-center opacity-70 text-cyan-400">
                A JOURNEY THROUGH
                <br /> ANCIENT WISDOM, MEDITATION, <br /> AND GLOBAL IMPACT
              </h1>
              <p className="text-black opacity-50  text-xl text-center">
                Jump-start baby’s exposure to first words using this beautifully
                designed <br /> board book box set—the perfect gift for newborns
                and baby showers!
              </p>

              <button className="btn btn-active text-white font-semibold bg-cyan-400 border-none float-end mt-4 ">
                Show The Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
