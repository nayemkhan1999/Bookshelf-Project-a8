import AnotherReadBook from "../AnotherReadBook/AnotherReadBook";

const ReadBook = ({ anotherData }) => {
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
