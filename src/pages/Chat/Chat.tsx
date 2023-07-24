import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import * as S from './Chat.style';

const Chat = () => {
  const [chat, setChat] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getChatList = async () => {
      try {
        const response = await fetch('/data/chatData.json');
        const data = await response.json();
        setChat(data.data);
      } catch (e) {
        console.error(e);
      }
    };

    void getChatList();
  }, []);

  return (
    <>
      <S.Container>
        <S.MenuBox>
          <Icon
            name="back"
            clickAction={() => {
              navigate(-1);
            }}
          />
          <S.RoomTitle>
            오늘 오후 7시 엽떡 드실분들 구합니다! 바로 연락주세요!
          </S.RoomTitle>
          <Icon
            name="out"
            clickAction={() => {
              setIsModalOpen((prev) => !prev);
            }}
          />
        </S.MenuBox>
        <S.ChatBox>
          {chat.map(({ id, nickName, auth, text }) => {
            return (
              <S.ChatCard type={auth} key={id}>
                <S.TextWrap type={auth}>
                  <S.NickName>{auth === 'admin' ? '나' : nickName}</S.NickName>
                  <S.ChatText type={auth}>{text}</S.ChatText>
                </S.TextWrap>
                <S.UserImg />
              </S.ChatCard>
            );
          })}
        </S.ChatBox>
        <S.InfoBox>
          <S.InfoInput type="text" />
          <Button
            title="보내기"
            border="none"
            buttonsize="small"
            buttonbackground="mainGreen"
            font="white"
          />
        </S.InfoBox>
      </S.Container>
      {isModalOpen && (
        <Modal
          type="confirm"
          confirmMessage="채팅방을 완전히 나가시겠습니까?"
          confirmAction={() => {
            navigate('/main');
          }}
          cancleAction={() => {
            setIsModalOpen((prev) => !prev);
          }}
        />
      )}
    </>
  );
};

export default Chat;
