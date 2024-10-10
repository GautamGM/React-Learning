import { useEffect, useState } from "react";
function useCurrencyConvetor(currency = "inr") {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        } else {
          return res.json();
        }
      })
      .then((result) => {
        if (result.lenght > 0) {
          setData(result);
        }
        setData(result[currency]);
      });
      
  }, [currency]);
  return data;
}
export default useCurrencyConvetor;
