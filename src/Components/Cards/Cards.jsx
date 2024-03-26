import { useEffect, useState } from "react";
import BookStore from "../BookStore/BookStore";

const Cards = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("/public/fake-data.json ")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);
  console.log(item);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-16">Books</h1>
      <div className="lg:mx-16 mx-4 grid lg:grid-cols-3 gap-6 mt-8 grid-cols-1 ">
        {item.map((hero) => (
          <BookStore key={hero.bookid} hero={hero}></BookStore>
        ))}
      </div>
    </div>
  );
};

export default Cards;
