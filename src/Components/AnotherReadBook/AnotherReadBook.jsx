const AnotherReadBook = ({ ReadDog }) => {
  const {
    bookName,
    author,
    image,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = ReadDog;
  return (
    <div>
      <div className="hero min- bg-base-50 border-2 mt-8 rounded-xl">
        <div className="hero-content flex-col lg:flex-row items-center justify-between gap-30">
          <img src={image} className=" w-auto h-96  rounded-2xl " />
          <div>
            <h1 className="text-3xl font-bold">{bookName}</h1>
            <p className="mt-4 font-medium">By : {author}</p>
            <div className="flex gap-10 mt-4 ">
              <div className="flex gap-5">
                <p className="font-medium">Tag:</p>
                <p className="text-[#23BE0A] font-bold">#Young Asult</p>
                <p className="text-[#23BE0A] font-bold">#identity</p>
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </span>
              <p className="font-medium">
                yearOfPublishing: {yearOfPublishing}
              </p>
            </div>
            <div className="flex gap-8 mt-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </span>
              <p className="font-medium">publisher: {publisher}</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </span>
              <p className="font-medium">Pages: {totalPages}</p>
            </div>
            <div className="divider"></div>
            <div className="flex gap-8">
              <button className="btn rounded-full text-[#328EFF]">
                category: {category}
              </button>
              <button className="btn rounded-full text-[#FFAC33]">
                Rating{rating}
              </button>
              <button className="btn bg-[#23BE0A] rounded-full text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherReadBook;
