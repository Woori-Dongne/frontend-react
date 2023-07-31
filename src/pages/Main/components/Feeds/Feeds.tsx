import { Feed } from '../../../../types/feedType';
import Header from '../Header/Header';
import FeedDetail from '../../../../components/FeedDetail';
import * as S from './Feeds.styles';

const Feeds = (props: Feed) => {
  return (
    <S.PostFeedContainer>
      <Header {...props} />

      {props.imageUrl && <S.FeedImage alt="img" src={props.imageUrl} />}

      <FeedDetail {...props} />
    </S.PostFeedContainer>
  );
};

export default Feeds;
