import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import useHookData from "../Hook/useHookData";
import { saveToLocalStorage } from "../SaveToLocalStorage/SaveToLocalStorage";
import {
  getAnotherData,
  saveToLocalStorageAother,
} from "../SaveToLocalStorageAnother/SaveToLocalStorageAnother";

const CardDetails = () => {
  const { id } = useParams();
  const { card, loading } = useHookData();

  const [hero, setHero] = useState([]);

  useEffect(() => {
    const singleData = card.find((heroId) => heroId.bookId === +id);
    setHero(singleData);
  }, [card, id]);

  const {
    bookName,
    image,
    author,
    category,
    publisher,
    yearOfPublishing,
    rating,
    totalPages,
    review,
  } = hero || {};

  const handleBook = (store) => {
    saveToLocalStorage(store);
  };

  const handleAnother = (second) => {
    const wishData = getAnotherData();
    const isExist = wishData.find((book) => book.id === wishData.id);
    if (!isExist) {
      saveToLocalStorageAother(second);
    } else {
      toast.error("All Ready Added");
    }
  };
  return (
    <div>
      <div className="lg:mx-16 md:mx-4 font-work mt-10 ">
        <div className="hero min-h-screen bg-base-200 border-2 rounded-2xl">
          <div className="hero-content flex-col  lg:flex-row  ">
            <div className="flex-1">
              <img src={image} className=" h-[80vh] rounded-2xl " />
            </div>
            <div className="flex-1">
              <div>
                <h1 className="text-4xl font-bold">{bookName}</h1>
                <p className="text-xl font-medium">By :{author}</p>
                <div className="divider"></div>
                <p className="text-xl font-medium">{category}</p>
                <div className="divider"></div>
                <p>
                  <p className="font-bold">Review : </p>
                  <p className="opacity-70 text-sm">{review}</p>
                </p>
                <div className="mt-10 ">
                  <div className="flex gap-5">
                    <p className="font-semibold text-black">Tag:</p>
                    <p className="text-[#23BE0A] font-bold"> #Young Adult </p>
                    <p className="text-[#23BE0A] font-bold"> #Identity </p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-16">
                    <p>Number of Pages:</p>
                    <p className="font-bold ml-8"> {totalPages}</p>
                  </div>
                  <div className="flex items-center gap-28">
                    <p> Publisher :</p>
                    <p className="font-bold ml-8">{publisher}</p>
                  </div>
                  <div className="flex items-center gap-14">
                    <p> YearOfPublishing :</p>
                    <p className="font-bold ml-8">{yearOfPublishing}</p>
                  </div>
                  <div className="flex items-center gap-36">
                    <p> Rating :</p>
                    <p className="font-bold ml-8">{rating}</p>
                  </div>
                </div>

                <div className="flex gap-5 mt-8">
                  <button
                    onClick={() => handleBook(hero)}
                    className="btn   border-black font-bold text-lg"
                  >
                    Read
                  </button>
                  <button
                    onClick={() => handleAnother(hero)}
                    className="btn btn-info text-white text-lg font-bold"
                  >
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CardDetails;
