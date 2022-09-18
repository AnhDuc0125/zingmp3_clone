import { useState, useEffect } from 'react';
import request from '~/requests';

const useSimpleFetch = (path, initialState = {}) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await request.get(path);
      setLoading(false);
      return response.data;
    };

    fetchData().then((res) => {
      setState((prev) => ({ ...prev, ...res?.data }));
    });
  }, [path]);

  return [state, loading];
};

export default useSimpleFetch;
