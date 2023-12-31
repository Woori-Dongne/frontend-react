import { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Feed } from '../../../types/feedType';
import useGetFetch from '../../../hooks/useGetFetch';
import Buttons from '../components/Buttons';
import Feeds from '../components/Feeds';
import EmptyCard from '../../../components/EmptyCard';

const Main = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [feedData, loading, error, hasMoreData] = useGetFetch(
    `/posts?offset=${page}&${searchParams.toString()}`,
    page,
  );
  const pageEnd = useRef<HTMLInputElement>(null);

  const loadMore = () => {
    if (hasMoreData) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (!pageEnd.current) {
      return;
    }

    if (!loading && hasMoreData) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 0.8 },
      );

      if (pageEnd.current) {
        observer.observe(pageEnd.current);
      }
      return () => {
        observer.disconnect();
      };
    }
  }, [loading, hasMoreData]);

  if (loading) return null;

  return (
    <div>
      <Buttons />
      {Array.isArray(feedData) && error === '' ? (
        feedData.map((list: Feed) => {
          return <Feeds key={list.id} {...list} />;
        })
      ) : (
        <EmptyCard />
      )}
      <div ref={pageEnd} />
    </div>
  );
};

export default Main;
