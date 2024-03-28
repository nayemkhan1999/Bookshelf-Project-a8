import { useEffect, useState } from "react";

const useHookData = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("./fake-data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
    setLoading(false);
  }, []);

  return { card, loading };
};

export default useHookData;
