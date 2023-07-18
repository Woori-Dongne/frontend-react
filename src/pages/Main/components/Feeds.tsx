import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { API_URL } from '../../../constants/api';
import * as S from '../Main.style';

interface feedData {
  id?: number;
  title?: string;
  detail?: string;
  personnel?: number;
  time?: string;
  location?: string;
}

const Feeds = () => {
  const [feedData, setFeedData] = useState<feedData | undefined>();

  const feedInfo = async () => {
    const response = await fetch(`${API_URL}mockData/feedData.json`, {
      method: 'GET',
    });
    const request = await response.json();
    setFeedData(request);
  };

  useEffect(() => {
    void feedInfo();
  }, []);

  return (
    <S.PostFeedContainer>
      <Header />
      <S.FeedImage />
      <S.FeedTitle>{feedData?.title} </S.FeedTitle>
      <S.FeedDetail>{feedData?.detail} </S.FeedDetail>
      <Footer feedData={feedData} />
    </S.PostFeedContainer>
  );
};

export default Feeds;
