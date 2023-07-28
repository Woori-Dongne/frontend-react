import { Feed } from '../../../../types/feedType';
import Header from '../Header/Header';
import FeedDetail from '../../../../components/FeedDetail';
import * as S from './Feeds.styles';

const Feeds = (props: Feed) => {
  return (
    <S.PostFeedContainer>
      <Header />
      <S.FeedImage />
      <FeedDetail {...props} />
    </S.PostFeedContainer>
  );
};

export default Feeds;
