import { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Feed } from '../../../types/feedType';
import useGetFetch from '../../../hooks/useGetFetch';
import Buttons from '../components/Buttons';
import Feeds from '../components/Feeds';
import EmptyCard from '../../../components/EmptyCard';

const Main = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(0);
  const [feedData, loading] = useGetFetch(
    `/posts?offset=${page}&${searchParams.toString()}`,
    page,
  );
  const pageEnd: any = useRef();

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (!loading) {
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
    }
  }, [loading]);

  if (loading) return null;

  return (
    <div>
      <Buttons />
      {Array.isArray(feedData) ? (
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
