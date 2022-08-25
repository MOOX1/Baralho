import React, { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create ( {
    baseURL: "https://www.deckofcardsapi.com/api/deck/"
})

export function useFetch<T = unknown>(url : string) {
  const [data, setData] = useState<T | null>(null);
  const [isFatch, setIsFatch] = useState<boolean>(true)
  const [ error, setError] = useState<Error | null>()

  useEffect(() => {
    api
      .get(url)
      .then((response) => setData(response.data))
      .catch(Error => {setError(Error)})
      .finally(() => { setIsFatch(false)});
  }, []);

  return { data, isFatch, error }
}
