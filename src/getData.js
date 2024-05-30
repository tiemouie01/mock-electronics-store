import { useState, useEffect } from "react";

const fetchData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};

export const useData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const fetchedData = await fetchData(
          "https://fakestoreapi.com/products/category/electronics"
        );
        setData(fetchedData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    dataFetch();
  }, []);

  return { data, error, loading };
};

// "https://fakestoreapi.com/products/category/electronics"
