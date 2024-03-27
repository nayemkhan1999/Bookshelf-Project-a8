import { toast } from "react-hot-toast";

export const getAnotherData = () => {
  const getStored = localStorage.getItem("wishlist");
  if (getStored) {
    return JSON.parse(getStored);
  }
  return [];
};

export const saveToLocalStorageAother = (id) => {
  const storage = getAnotherData();
  const isExist = storage.find((idx) => idx.bookId === id.bookId);
  if (!isExist) {
    storage.push(id);
    localStorage.setItem("wishlist", JSON.stringify(storage));
    toast.success("Add Read Successfully");
  } else {
    toast.error("Already Added Read");
  }
};
