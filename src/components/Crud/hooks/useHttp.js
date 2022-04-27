import { useState, useCallback } from 'react';

export default function useHttp() {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const request = useCallback(async (url, opt = {}) => {
    setLoading(true);

    try {
      const responseFetch = await fetch(url, opt);

      if (!responseFetch.ok) throw new Error(`Ошибка в запросе: ${url}, ${JSON.stringify(opt)}`);

      const response = await responseFetch.json();
      
      if (!response.success) throw new Error(`Ошибка на сервере: ${response.error}`);

      setLoading(false);
      return response.data;

    } catch (e) {
      setError(e.message);
      setLoading(false);
      console.log('⛔', e.message);
    }
  }, []);

  const cleanError = useCallback(() => setError(null), []);

  return { loading, request, error, cleanError };
};
