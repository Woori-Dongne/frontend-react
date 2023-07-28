import { useEffect, useState } from 'react';
import { API_URL } from '../../../constants/api';
import { Feed } from '../../../types/feedType';
import Buttons from '../components/Buttons/Buttons';
import Feeds from '../components/Feeds/Feeds';
import * as S from './Main.style';

const Main = () => {
  const [feedData, setFeedData] = useState<Feed[]>([]);

  const getFeedInfo = async () => {
    const response = await fetch(`${API_URL}/data/postData.json`);
    const request = await response.json();
    setFeedData(request.data);
  };

  useEffect(() => {
    void getFeedInfo();
  }, []);

  return (
    <S.Container>
      <Buttons />
      {feedData.map((list) => {
        return <Feeds key={list.id} {...list} />;
      })}
    </S.Container>
  );
};

export default Main;
