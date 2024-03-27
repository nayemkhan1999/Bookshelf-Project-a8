import { toast } from "react-hot-toast";

export const getBookData = () => {
  const getStored = localStorage.getItem("books");
  if (getStored) {
    return JSON.parse(getStored);
  }
  return [];
};

export const saveToLocalStorage = (id) => {
  const storage = getBookData();
  const isExist = storage.find((idx) => idx.bookId === id.bookId);
  if (!isExist) {
    storage.push(id);
    localStorage.setItem("books", JSON.stringify(storage));
    toast.success("Add Read Successfully");
  } else {
    toast.error("Already Added Read");
  }
};
