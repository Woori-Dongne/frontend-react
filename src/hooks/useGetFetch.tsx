import { useState, useEffect } from 'react';
import { BACKEND_API_URL } from '../constants/api';
import { Feed } from '../types/feedType';

const useGetFetch = (url: string, page: number) => {
  const [data, setData] = useState<Feed[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [error, setError] = useState<string>('');

  const getData = async (page: number) => {
    const token = localStorage.getItem('accessToken') as string;
    try {
      const response = await fetch(`${BACKEND_API_URL}${url}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (result.length > 0) {
        // 무한스크롤 파트 데이터 중복이 돼서 주석처리해놓음
        // setData((prev) => [...prev, ...result]);
        setData(result);
      } else {
        setHasMoreData(false);
      }

      if (result.message === 'Resource not found')
        setError('데이터를 찾을 수 없습니다');
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    void getData(page);
  }, [url]);

  return [data, loading, error, hasMoreData];
};

export default useGetFetch;
