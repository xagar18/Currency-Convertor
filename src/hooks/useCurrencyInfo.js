import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        if (!response.ok) {
          throw new Error("Failed to load currency data");
        }
        const result = await response.json();
        setData(result[currency]);
      } catch (error) {
        setError(error);
        console.error("Error fetching currency data:", error);
      }
    };
    fetchData();
  }, [currency]);

  return { data, error };
}

export default useCurrencyInfo;
