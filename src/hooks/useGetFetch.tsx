import { useState, useEffect } from 'react';
import { BACKEND_API_URL } from '../constants/api';

const useGetFetch = (url: string) => {
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken') as string;
    const getData = async () => {
      try {
        const response = await fetch(`${BACKEND_API_URL}${url}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (result.message === 'Resource not found')
          setError('데이터를 찾을 수 없습니다');
        setData(result);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    void getData();
  }, [url]);

  return [data, loading, error];
};

export default useGetFetch;
