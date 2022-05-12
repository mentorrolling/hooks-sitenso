import { useState, useEffect } from "react";
import { getQuote } from "../../helpers/fetchQuote";

const useFetch = (id) => {
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

    getQuote(id)
      .then((response) => {
        setState({
          loading: false,
          datos: response,
          error: null,
        });
      })
      .catch((err) => setState({ ...state, error: err }));
  }, [id]);

  return state;
};

export default useFetch;
