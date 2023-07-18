import { useLocation } from 'react-router-dom';
import { Feed, Info, InfoDetail } from '../../types/feedType';
import * as S from './FeedDetail.style';

const FeedDetail = ({ title, detail, people, time, location }: Feed) => {
  const locationHook = useLocation();
  const isInMypage = locationHook.pathname === '/myPage';

  const infoDetail: InfoDetail = {
    people,
    time,
    location,
  };

  return (
    <>
      <S.TitleWrap>
        <S.Title>{title}</S.Title>
        {isInMypage && <img src="/icons/master.svg" alt="master" />}
      </S.TitleWrap>
      {!isInMypage && <S.SubTitle>{detail}</S.SubTitle>}
      <S.InfoWrap>
        <S.InfoBox>
          {INFO_TYPE.map(({ id, icon, subText }: Info) => {
            return (
              <S.Description key={id}>
                <img src={`/icons/${icon}.svg`} alt={icon} />
                <S.InfoDetail>
                  {infoDetail[icon]}
                  {subText}
                </S.InfoDetail>
              </S.Description>
            );
          })}
        </S.InfoBox>
        <S.Button>채팅방 입장</S.Button>
      </S.InfoWrap>
    </>
  );
};

export default FeedDetail;

const INFO_TYPE = [
  { id: 1, icon: 'people', subText: '명' },
  { id: 2, icon: 'time', subText: '' },
  { id: 3, icon: 'location', subText: '' },
];
