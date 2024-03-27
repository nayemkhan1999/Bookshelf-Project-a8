import { useEffect, useState } from "react";
import AnotherReadBook from "../AnotherReadBook/AnotherReadBook";
import { getAnotherData } from "../SaveToLocalStorageAnother/SaveToLocalStorageAnother";

const ReadBook = () => {
  const [anotherData, setAnotherData] = useState([]);

  useEffect(() => {
    setAnotherData(getAnotherData());
  }, []);
  console.log(anotherData);
  return (
    <div>
      {anotherData.map((ReadDog) => (
        <AnotherReadBook
          key={ReadDog.bookId}
          ReadDog={ReadDog}
        ></AnotherReadBook>
      ))}
    </div>
  );
};

export default ReadBook;
