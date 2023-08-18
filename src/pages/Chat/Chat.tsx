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
import { Message, ReportData } from '../../types/chatType';
import { BACKEND_API_URL } from '../../constants/api';
import defaultProfile from '../../assets/profile.png';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import DropDown from '../../components/DropDown/DropDown';
import * as S from './Chat.style';

const Chat = () => {
  const [chat, setChat] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');
  const [currentSelectId, setCurrentSelectId] = useState<string | number>('');
  const [report, setReport] = useState<ReportData>({
    friendId: 0,
    content: '',
  });

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

  const clickUserImage = (id: number, userId: number, auth: string) => {
    if (id === currentSelectId && auth !== 'admin') {
      setIsDropDownOpen((prev) => !prev);
      setReport((prev) => ({ ...prev, friendId: userId }));
    }
  };

  const registeFriend = async (uri: string) => {
    try {
      const response = await fetch(`${BACKEND_API_URL}/${uri}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (result.created_at) {
        alert('친구 등록이 완료되었습니다');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const checkValue = (value: string | number): void => {
    if (value === '친구등록') {
      void registeFriend(`users/follow/${String(report.friendId)}`);
    } else {
      setActiveModalList((prev) => ({ ...prev, isReportModalOpen: true }));
    }
  };

  const confirmReport = async () => {
    try {
      const response = await fetch(`${BACKEND_API_URL}/users/report`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(report),
      });
      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.error(e);
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
          {chat.map(({ id, auth, userId, username, message }) => {
            return (
              <S.ChatCard type={auth} key={id}>
                <S.TextWrap type={auth}>
                  <S.NickName>{auth === 'admin' ? '나' : username}</S.NickName>
                  <S.ChatText type={auth === 'admin' ? 'admin' : 'person'}>
                    {message}
                  </S.ChatText>
                </S.TextWrap>
                <S.ImageWrap>
                  <S.UserImg
                    src={defaultProfile}
                    alt="profile"
                    onClick={() => {
                      setCurrentSelectId(id);
                      clickUserImage(id, userId, auth);
                    }}
                  />
                  {isDropDownOpen &&
                    auth !== 'admin' &&
                    id === currentSelectId && (
                      <DropDown
                        $top="20px"
                        dropDownList={DROPDOWN_INFO}
                        clickValue={checkValue}
                        modalRef={modalRef}
                        setState={setIsDropDownOpen}
                      />
                    )}
                </S.ImageWrap>
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
          type="report"
          confirmMessage={
            <S.ReportBox>
              <S.ReportTitle>신고 사유 작성</S.ReportTitle>
              <S.ReportTextarea
                placeholder="상세하게 신고 사유를 작성해주세요"
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  setReport((prev) => ({ ...prev, content: e.target.value }));
                }}
              />
            </S.ReportBox>
          }
          confirmAction={confirmReport}
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
