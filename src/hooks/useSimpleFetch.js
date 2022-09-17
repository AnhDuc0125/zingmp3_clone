import { useState, useEffect } from 'react';
import request from '~/requests';

const useSimpleFetch = (path, initialState = {}) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await request.get(path);
      return response.data;
    };

    fetchData().then((res) => {
      setState((prev) => ({ ...prev, ...res?.data }));
    });
  }, [path]);

  return state;
};

export default useSimpleFetch;
