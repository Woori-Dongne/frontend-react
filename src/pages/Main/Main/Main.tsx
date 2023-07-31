import { useSearchParams } from 'react-router-dom';
import { Feed } from '../../../types/feedType';
import useGetFetch from '../../../hooks/useGetFetch';
import Buttons from '../components/Buttons/Buttons';
import Feeds from '../components/Feeds/Feeds';
import * as S from './Main.style';

const Main = () => {
  const [searchParams] = useSearchParams();

  const [feedData, loading] = useGetFetch(`/posts?${searchParams.toString()}`);

  if (loading) return null;

  return (
    <S.Container>
      <Buttons />
      {Array.isArray(feedData) &&
        feedData.map((list: Feed) => {
          return <Feeds key={list.id} {...list} />;
        })}
    </S.Container>
  );
};

export default Main;
