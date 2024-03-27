import { useEffect, useState } from "react";
import { getBookData } from "../SaveToLocalStorage/SaveToLocalStorage";
import WishCard from "../WishCard/WishCard";

const WhishlistBook = () => {
  const [showdata, setShowData] = useState([]);

  useEffect(() => {
    setShowData(getBookData());
  }, []);
  console.log(showdata);

  return (
    <div>
      {showdata.map((dataHero) => (
        <WishCard key={dataHero.bookId} dataHero={dataHero}></WishCard>
      ))}
    </div>
  );
};

export default WhishlistBook;
