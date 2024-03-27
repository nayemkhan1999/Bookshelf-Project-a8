import { useState } from "react";

import ReadBook from "../ReadBook/ReadBook";
import WhishlistBook from "../WishlistBook/WhishlistBook";

const Books = () => {
  const [isToggle, setToggle] = useState(0);

  return (
    <div className="lg:mx-16 md:mx-4 font-work mt-8">
      <div className=" ">
        <button className="btn btn-block text-3xl font-bold h-20">Book</button>
        <div className="flex-none text-center mt-5">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="bg-[#23BE0A] font-bold text-white text-lg">
                  Sort By
                </summary>
                <ul className="p-1 bg-base-200 w-48 rounded-t-none">
                  <li>
                    <a>Rating</a>
                  </li>
                  <li>
                    <a>Number of pages</a>
                  </li>
                  <li>
                    <a>Publisher year</a>
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
                  ? "btn border-x-black bg-red-700 border-t-black"
                  : ""
              }
            >
              Read Books
            </button>
            <button
              onClick={() => setToggle(1)}
              className={
                isToggle == 1
                  ? "btn border-x-black bg-blue-700  border-t-black"
                  : ""
              }
            >
              Wishlist Books
            </button>
            {isToggle == 0 ? (
              <WhishlistBook></WhishlistBook>
            ) : (
              <ReadBook></ReadBook>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
