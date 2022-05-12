import { useState, useEffect, useRef } from "react";
import { getQuote } from "../helpers/fetchQuote";

const useFetch = (id) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    loading: true,
    datos: [],
    error: null,
  });

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });

    useEffect(() => {
      return () => {
        isMounted.current = false;
      };
    }, []);

    getQuote(id)
      .then((response) => {
        if (isMounted) {
          setState({
            loading: false,
            datos: response,
            error: null,
          });
        }
      })
      .catch((err) => setState({ ...state, error: err }));
  }, [id]);

  return state;
};

export default useFetch;
