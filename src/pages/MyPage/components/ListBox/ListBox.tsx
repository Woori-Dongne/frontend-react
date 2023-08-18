import { Feed, Follow } from '../../../../types/feedType';
import useGetFetch from '../../../../hooks/useGetFetch';
import FeedDetail from '../../../../components/FeedDetail';
import EmptyCard from '../../../../components/EmptyCard';
import FollowCard from '../FollowCard';
import * as S from './ListBox.style';

interface Props {
  id: number;
  api: string;
  handleCategory: (id: number, url: string) => void;
}

const ListBox = ({ id, api, handleCategory }: Props) => {
  const page = 1;
  const [data, loading, error] = useGetFetch(api, page);

  if (loading) return <EmptyCard />;

  return (
    <S.ListBox>
      {Array.isArray(data) && error === '' ? (
        id !== 2 ? (
          data.map((list: Feed) => {
            return (
              <S.ListCard key={list.id}>
                <FeedDetail {...list} />
              </S.ListCard>
            );
          })
        ) : (
          data.map((list: Follow) => {
            return (
              <S.ListCard key={list.id}>
                <FollowCard list={list} handleCategory={handleCategory} />
              </S.ListCard>
            );
          })
        )
      ) : (
        <EmptyCard />
      )}
    </S.ListBox>
  );
};

export default ListBox;
