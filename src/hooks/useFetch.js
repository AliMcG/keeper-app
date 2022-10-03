import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";


// https://axios-http.com/docs/cancellation

function useFetch(url) {
  const { user, isAuthenticated } = useAuth0();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData("");
    setError(null);
    const controller = new AbortController();
    if (isAuthenticated) {
      const userUrl = url + "/" + user.sub
      console.log(userUrl)
      axios
      .get(userUrl, {
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
    }
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
