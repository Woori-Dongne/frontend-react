import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Feed, Info, InfoDetail } from '../../types/feedType';
import Icon from '../Icon/Icon';
import Modal from '../Modal';
import Button from '../Button/Button';
import * as S from './FeedDetail.style';

const FeedDetail = ({ title, detail, people, time, location }: Feed) => {
  const [isOpenChatModal, setIsOpenChatModal] = useState(false);
  const [showFullModal, setShowFullModal] = useState(false);
  const locationHook = useLocation();
  const navigate = useNavigate();
  const isInMypage = locationHook.pathname === '/myPage';

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.removeProperty('overflow');
  };

  const clickChatButton = () => {
    setIsOpenChatModal(true);
    lockScroll();
  };

  const closeModal = () => {
    setIsOpenChatModal(false);
    unlockScroll();
  };

  const infoDetail: InfoDetail = {
    people,
    time,
    location,
  };

  const checkPeronnel = () => {
    if (Number(people) > 6) {
      setIsOpenChatModal(false);
      setShowFullModal(true);
      unlockScroll();
    } else {
      navigate('/chat');
      unlockScroll();
    }
  };

  return (
    <>
      <S.TitleWrap>
        <S.Title>{title}</S.Title>
        {isInMypage && <Icon name="master" />}
      </S.TitleWrap>
      {!isInMypage && <S.SubTitle>{detail}</S.SubTitle>}
      <S.InfoWrap>
        <S.InfoBox>
          {INFO_TYPE.map(({ id, icon, subText }: Info) => {
            return (
              <S.Description key={id}>
                <Icon name={icon} />
                <S.InfoDetail>
                  {infoDetail[icon]}
                  {subText}
                </S.InfoDetail>
              </S.Description>
            );
          })}
        </S.InfoBox>
        <S.Div>
          <Button
            title="채팅방 입장"
            $border="none"
            $font="black"
            $buttonsize="medium"
            $buttonbackground="mainYellow"
            onClick={clickChatButton}
          />
          {isOpenChatModal && (
            <Modal
              type="confirm"
              confirmMessage={
                <>
                  {title}
                  <br />
                  해당 채팅방에 입장하시겠습니까?
                </>
              }
              cancelAction={closeModal}
              confirmAction={() => {
                checkPeronnel();
              }}
            />
          )}
          {showFullModal && (
            <Modal
              type="goback"
              confirmMessage={
                <>
                  해당 채팅방의 참여인원이 <br /> 가득찼습니다!
                </>
              }
              confirmAction={() => {
                setShowFullModal(false);
              }}
            />
          )}
        </S.Div>
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
