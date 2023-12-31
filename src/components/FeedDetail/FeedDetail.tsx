import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Feed, Info, InfoDetail } from '../../types/feedType';
import { changeDateString } from '../../utils/formatDate';
import { socket } from '../../lib/socket';
import { RoomTitleContext } from '../ChatProvider/ChatProvider';
import { JoinRoom } from '../../types/chatType';
import Icon from '../Icon';
import Modal from '../Modal';
import Button from '../Button/Button';
import * as S from './FeedDetail.style';

const FeedDetail = ({
  id,
  title,
  content,
  personnel,
  deadline,
  detailRegion,
  roomName,
  chattingRoom,
}: Feed) => {
  const [isOpenChatModal, setIsOpenChatModal] = useState(false);
  const [showFullModal, setShowFullModal] = useState(false);
  const { handleRoomInfo } = useContext(RoomTitleContext);
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
    personnel,
    deadline: changeDateString(deadline),
    detailRegion,
  };

  const checkPeronnel = () => {
    if (personnel > 6) {
      setIsOpenChatModal(false);
      setShowFullModal(true);
      unlockScroll();
    } else {
      const currentRoomName =
        roomName !== undefined ? roomName : chattingRoom?.roomName;
      socket.emit(
        'join-room',
        { currentRoomName, postId: id },
        (chat: JoinRoom) => {
          handleRoomInfo(title, currentRoomName);
          navigate('/chat');
        },
      );
      unlockScroll();
    }
  };

  return (
    <>
      <S.TitleWrap>
        <S.Title>{title}</S.Title>
        {isInMypage && <Icon name="master" />}
      </S.TitleWrap>
      {!isInMypage && <S.SubTitle>{content}</S.SubTitle>}
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
              confirmAction={checkPeronnel}
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
  { id: 1, icon: 'personnel', subText: '명' },
  { id: 2, icon: 'deadline', subText: '' },
  { id: 3, icon: 'detailRegion', subText: '' },
];
