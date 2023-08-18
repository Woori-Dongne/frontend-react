import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from '../../lib/socket';
import { RoomTitleContext } from '../../components/ChatProvider/ChatProvider';
import { Message } from '../../types/chatType';
import { BACKEND_API_URL } from '../../constants/api';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import DropDown from '../../components/DropDown/DropDown';
import * as S from './Chat.style';

const Chat = () => {
  const [chat, setChat] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');
  const { roomInfo } = useContext(RoomTitleContext);
  const modalRef = useRef<HTMLDivElement>(null);
  const { title, roomName } = roomInfo;

  const [activeModalList, setActiveModalList] = useState({
    isChatRoomModalOpen: false,
    isReportModalOpen: false,
  });

  const { isChatRoomModalOpen, isReportModalOpen } = activeModalList;

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const navigate = useNavigate();
  const chatId = chat.length;
  const token = localStorage.getItem('accessToken') as string;

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

  const postFetch = async (uri: string) => {
    try {
      const response = await fetch(`${BACKEND_API_URL}/${uri}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: null,
      });
      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  };

  const checkValue = (value: string | number): void => {
    if (value === '친구등록') {
      void postFetch('users/follow/2');
    } else {
      // void postFetch('users/report');
    }
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
              setActiveModalList((prev) => ({
                ...prev,
                isChatRoomModalOpen: true,
              }));
            }}
          />
        </S.MenuBox>
        <S.ChatBox>
          <button onClick={() => checkValue('친구등록')}>테스트</button>
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
                  title={String(id)}
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    const targetElement = e.target as HTMLDivElement;

                    if (targetElement.title === String(id) && auth !== 'admin')
                      setIsDropDownOpen((prev) => !prev);
                  }}
                >
                  {isDropDownOpen && auth !== 'admin' && (
                    <DropDown
                      $top="60px"
                      dropDownList={DROPDOWN_INFO}
                      clickValue={checkValue}
                      modalRef={modalRef}
                      setState={setIsDropDownOpen}
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
      {isChatRoomModalOpen && (
        <Modal
          type="confirm"
          confirmMessage="채팅방을 완전히 나가시겠습니까?"
          confirmAction={() => {
            navigate('/main');
          }}
          cancelAction={() => {
            setActiveModalList((prev) => ({
              ...prev,
              isChatRoomModalOpen: false,
            }));
          }}
        />
      )}
      {isReportModalOpen && (
        <Modal
          type="confirm"
          confirmMessage="신고 사유 작성"
          confirmAction={() => {
            navigate('/main');
          }}
          cancelAction={() => {
            setActiveModalList((prev) => ({
              ...prev,
              isReportModalOpen: false,
            }));
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
