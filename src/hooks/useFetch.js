import { useState, useEffect } from "react";
import axios from "axios";

// https://axios-http.com/docs/cancellation

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData("");
    setError(null);
    const controller = new AbortController();
    axios
      .get(url, {
        signal: controller.signal,
      })
      .then((res) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.
        console.log(res);
        // res.data.content && setData(res.data.content);
        res.data && setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
