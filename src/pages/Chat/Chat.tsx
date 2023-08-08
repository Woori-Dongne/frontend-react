import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from '../../lib/socket';
import { RoomTitleContext } from '../../components/ChatProvider/ChatProvider';
import { Message } from '../../types/chatType';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import DropDown from '../../components/DropDown/DropDown';
import * as S from './Chat.style';

const Chat = () => {
  const [chat, setChat] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');
  const { roomInfo } = useContext(RoomTitleContext);
  const { title, roomName } = roomInfo;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const chatId = chat.length;
  const navigate = useNavigate();

  useEffect(() => {
    const messageHandler = (chat: Message) => {
      setChat((prev) => [...prev, { ...chat, id: chatId, auth: 'person' }]);
    };

    socket.on('message', messageHandler);

    return () => {
      socket.off('message', messageHandler);
    };
  }, [chat]);

  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message === '') {
      alert('메시지를 입력해 주세요.');
      return;
    }

    socket.emit('message', { roomName, message }, (chat: Message) => {
      setChat((prev) => [...prev, { ...chat, id: chatId, auth: 'admin' }]);
      setMessage('');
    });
  };

  const checkValue = (value: string | number): void => {
    console.log(value);
  };

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
          <S.RoomTitle>{title}</S.RoomTitle>
          <Icon
            name="out"
            clickAction={() => {
              setIsModalOpen((prev) => !prev);
            }}
          />
        </S.MenuBox>
        <S.ChatBox>
          {chat.map(({ id, auth, username, message }) => {
            return (
              <S.ChatCard type={auth} key={id}>
                <S.TextWrap type={auth}>
                  <S.NickName>{auth === 'admin' ? '나' : username}</S.NickName>
                  <S.ChatText type={auth === 'admin' ? 'admin' : 'person'}>
                    {message}
                  </S.ChatText>
                </S.TextWrap>
                <S.UserImg
                  onClick={() => {
                    setIsDropDownOpen((prev) => !prev);
                  }}
                >
                  {isDropDownOpen && auth !== 'admin' && (
                    <DropDown
                      $top="60px"
                      dropDownList={DROPDOWN_INFO}
                      clickValue={checkValue}
                    />
                  )}
                </S.UserImg>
              </S.ChatCard>
            );
          })}
        </S.ChatBox>
        <S.InfoBox onSubmit={sendMessage}>
          <S.InfoInput type="text" onChange={handleMessage} value={message} />
          <Button
            title="보내기"
            $border="none"
            $buttonsize="small"
            $buttonbackground="mainGreen"
            $font="white"
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
          cancelAction={() => {
            setIsModalOpen((prev) => !prev);
          }}
        />
      )}
    </>
  );
};

export default Chat;

const DROPDOWN_INFO = [
  { id: 1, title: '친구등록', color: 'mainBlack' },
  { id: 2, title: '신고하기', color: 'reportRed' },
];
