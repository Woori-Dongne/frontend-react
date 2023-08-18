import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { socket } from '../../lib/socket';
import { CreateRoom } from '../../types/chatType';
import { RoomTitleContext } from '../../components/ChatProvider/ChatProvider';
import { uploadImageFile } from '../../S3upload';
import { CategoryId, DateTypeList } from './types/writingType';
import { FeedInfo } from '../../types/feedType';
import { BACKEND_API_URL } from '../../constants/api';
import Input from '../../components/Input';
import Detail from './components/Detail/Detail';
import Upload from './components/Upload/Upload';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal';
import DropDownBox from './components/DropDownBox/DropDownBox';
import * as S from './Writing.style';

const Writing = () => {
  const [isOpenPostModal, setIsOpenPostModal] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string | null | File>(null);
  const inputImageRef = useRef<HTMLInputElement | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const onClearInput = () => {
    if (inputImageRef.current) {
      inputImageRef.current.value = '';
    }
  };

  const [feedInfo, setFeedInfo] = useState<FeedInfo>({
    title: '',
    content: '',
    personnel: 0,
    category: 0,
    regionId: 1,
    detailRegion: '',
    imageUrl: 'null',
    deadline: new Date(),
  });

  const [deadLineDate, setDeadLineDate] = useState<DateTypeList>({
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
  });

  const { title, content, category, detailRegion, personnel } = feedInfo;
  const { year, month, day, hour, minute } = deadLineDate;

  const getModifyFeed = async () => {
    const id: string = location.state;
    const response = await fetch(`${BACKEND_API_URL}/post/${id}`);
    const data = await response.json();
    setFeedInfo(data);
  };

  useEffect(() => {
    if (location.state) {
      void getModifyFeed();
    }
  }, [location]);

  const checkDate = Object.values(deadLineDate).every((el) => el !== '');

  useEffect(() => {
    if (checkDate) {
      const dateString = `${year}.${month}.${day} ${hour}:${minute}`;
      setFeedInfo((prev) => ({ ...prev, deadline: new Date(dateString) }));
    }
  }, [deadLineDate]);

  const onClick = () => {
    try {
      setLoading(true);
      uploadImageFile(image, setImage, setFeedInfo);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
      onClearInput();
    }
  };

  useEffect(() => {
    if (imgSrc !== null) {
      onClick();
    }
  }, [imgSrc]);

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setFeedInfo((prev) => ({ ...prev, [name]: value }));
  };

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.removeProperty('overflow');
  };

  const clickPostButton = () => {
    setIsOpenPostModal(true);
    lockScroll();
  };

  const { handleRoomInfo } = useContext(RoomTitleContext);

  const sucessToPost = () => {
    socket.emit('create-room', feedInfo, (chat: CreateRoom) => {
      handleRoomInfo(chat.title, chat.roomName);
      navigate('/chat');
    });
    unlockScroll();
  };

  const categotyIdList: CategoryId = {
    배달: 1,
    공구: 2,
    산책: 3,
    운동: 4,
  };

  const selectList = (name: string, value: string | number): void => {
    if (name === 'category') {
      setFeedInfo((prev) => ({ ...prev, category: categotyIdList[value] }));
    }
    setFeedInfo((prev) => ({ ...prev, [name]: value }));
  };

  const selectDate = (name: string, value: string | number): void => {
    setDeadLineDate((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const activeButton =
    title.length > 1 && detailRegion.length > 1 && personnel > 1 && checkDate;

  return (
    <S.Container>
      <S.Remind>
        앞에 (<span>✴︎</span>)표시가 있는 항목은 필수 항목입니다.
      </S.Remind>
      <Input
        title="제목"
        required={true}
        type="text"
        placeholder="최대 30글자까지 입력 가능합니다"
        maxLength={30}
        value={title}
        onChange={onChangeHandler}
        name="title"
      />
      <S.InfoBox>
        <S.InfoTitle>카테고리</S.InfoTitle>
        <DropDownBox
          width="100%"
          placeholder={category}
          type="category"
          changeValue={selectList}
        />
      </S.InfoBox>

      <Detail detailText={content} handleChangeDetail={onChangeHandler} />
      <Upload
        setImage={setImage}
        inputRef={inputImageRef}
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
      />
      <Input
        title="예상 픽업 장소"
        required={true}
        type="text"
        placeholder="동 주소와 상세 주소를 작성해주세요"
        value={detailRegion}
        onChange={onChangeHandler}
        name="detailRegion"
      />
      <S.InfoBox>
        <S.InfoTitle>인원</S.InfoTitle>
        <DropDownBox
          width="100%"
          placeholder={personnel}
          type="personnel"
          changeValue={selectList}
        />
      </S.InfoBox>
      <S.InfoBox>
        <S.InfoTitle>마감 기한</S.InfoTitle>
        <S.DropDownWrap>
          {DATE_INPUT_LIST.map(({ id, type, width }) => {
            return (
              <DropDownBox
                key={id}
                width={width}
                placeholder={deadLineDate[type]}
                type={type}
                changeValue={selectDate}
              />
            );
          })}
        </S.DropDownWrap>
      </S.InfoBox>

      <S.ButtonBox>
        <Button
          title="글 작성하기"
          $buttonbackground={activeButton ? 'mainYellow' : 'disable'}
          $border="none"
          $buttonsize="large"
          $font={activeButton ? 'black' : 'white'}
          onClick={clickPostButton}
          disabled={!activeButton}
        />
        {isOpenPostModal && (
          <Modal
            type="confirm"
            confirmMessage={
              <>
                해당 내용으로 <br /> 글을 등록할까요?
              </>
            }
            confirmAction={sucessToPost}
            cancelAction={() => {
              unlockScroll();
            }}
          />
        )}
      </S.ButtonBox>
    </S.Container>
  );
};

export default Writing;

const DATE_INPUT_LIST = [
  { id: 1, type: 'year', width: '30%' },
  { id: 2, type: 'month', width: '30%' },
  { id: 3, type: 'day', width: '30%' },
  { id: 4, type: 'hour', width: '45%' },
  { id: 5, type: 'minute', width: '45%' },
];
