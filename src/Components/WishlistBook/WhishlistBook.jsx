import WishCard from "../WishCard/WishCard";

const WhishlistBook = ({ showdata }) => {
  return (
    <div>
      {showdata.map((dataHero) => (
        <WishCard key={dataHero.bookId} dataHero={dataHero}></WishCard>
      ))}
    </div>
  );
};

export default WhishlistBook;
