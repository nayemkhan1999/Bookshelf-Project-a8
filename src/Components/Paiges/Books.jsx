import { useEffect, useState } from "react";

import ReadBook from "../ReadBook/ReadBook";
import { getBookData } from "../SaveToLocalStorage/SaveToLocalStorage";
import { getAnotherData } from "../SaveToLocalStorageAnother/SaveToLocalStorageAnother";
import WhishlistBook from "../WishlistBook/WhishlistBook";

const Books = () => {
  const [showdata, setShowData] = useState([]);

  useEffect(() => {
    setShowData(getBookData());
  }, []);
  const [isToggle, setToggle] = useState(0);

  const [anotherData, setAnotherData] = useState([]);

  useEffect(() => {
    setAnotherData(getAnotherData());
  }, []);
  // This is Sort State Section
  const [rating, setRating] = useState([]);
  const [publising, setPublishing] = useState([]);

  const [sortTh, setThSort] = useState([]);
  useEffect(() => {
    setThSort(getBookData());
    setRating(getBookData());
    setPublishing(getBookData());
  }, []);

  //  Now Writing to  sort Function Section
  const handleSort = () => {
    const Rating = sortTh.sort((a, b) => b.rating - a.rating);
    setShowData(Rating);
  };
  const handleSort2 = () => {
    const Rating = rating.sort((a, b) => b.totalPages - a.totalPages);
    setShowData(Rating);
  };
  const handleSort3 = () => {
    const Rating = publising.sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    setShowData(Rating);
  };

  return (
    <div className="lg:mx-16 md:mx-4 font-work mt-8">
      <div className=" ">
        <button className="btn btn-block text-3xl font-bold h-20">Book</button>
        <div className="flex-none text-center mt-5 ">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <details>
                <summary className="bg-[#23BE0A] font-bold text-white text-lg">
                  Sort By
                </summary>
                <ul className="p-1 bg-base-200 w-48 rounded-t-none z-50">
                  <li>
                    <a onClick={() => handleSort()}>Rating</a>
                  </li>
                  <li>
                    <a onClick={() => handleSort2()}>Number of pages</a>
                  </li>
                  <li>
                    <a onClick={() => handleSort3()}>Publisher year</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div>
          <div className=" mr-4">
            <button
              onClick={() => setToggle(0)}
              className={
                isToggle == 0
                  ? "btn border-x-gray-400 bg-[#23BE0A] text-lg  font-semibold text-white border-t-black"
                  : ""
              }
            >
              Read Books
            </button>
            <button
              onClick={() => setToggle(1)}
              className={
                isToggle == 1
                  ? "btn border-x-gray-400 bg-info text-lg font-semibold text-white  border-b-black"
                  : ""
              }
            >
              Wishlist Books
            </button>
            {isToggle == 0 ? (
              <WhishlistBook showdata={showdata}></WhishlistBook>
            ) : (
              <ReadBook anotherData={anotherData}></ReadBook>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
