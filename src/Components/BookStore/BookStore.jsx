import { NavLink } from "react-router-dom";
import "../../CardStyle.css";

const BookStore = ({ hero }) => {
  const { bookId, image, bookName, author, rating, category } = hero;
  return (
    <div>
      <NavLink to={`/cardDetails/${bookId}`}>
        <div className=" font-work">
          <div className="card card-compact   bg-base-100 shadow-xl border-2">
            <figure className="w-auto h-auto  mx-auto rounded-2xl p-3 ">
              <img
                src={image}
                className="rounded-2xl card:hover "
                alt="Books"
              />
            </figure>

            <div className="card-body">
              <div className="flex items-center gap-7 text-[#23BE0A] text-base font-semibold ml-4">
                <div>Young Adult</div>
                <div>Identity</div>
              </div>
              <h2 className="card-title text-2xl font-bold">{bookName}</h2>
              <p className="text-base font-medium">By : {author}</p>
              <div className="flex justify-between mr-10 text-base font-medium">
                <div>{category}</div>
                <div className="flex items-center gap-1">
                  <div>{rating}</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default BookStore;
