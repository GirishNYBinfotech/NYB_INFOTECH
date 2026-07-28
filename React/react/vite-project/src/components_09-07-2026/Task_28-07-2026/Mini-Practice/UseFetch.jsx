import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result.slice(0, 5));
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

export default useFetch