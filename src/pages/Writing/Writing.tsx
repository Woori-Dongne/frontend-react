import { useState, useContext, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { socket } from '../../lib/socket';
import { Feed } from '../../types/feedType';
import { CreateRoom } from '../../types/chatType';
import { RoomTitleContext } from '../../components/ChatProvider/ChatProvider';
import { uploadImageFile } from '../../S3upload';
import Detail from './components/Detail/Detail';
import Title from './components/Title/Title';
import Pickup from './components/Pickup/Pickup';
import Upload from './components/Upload/Upload';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal';
import DropDownBox from './components/DropDownBox/DropDownBox';
import { CATEGORY_SORT } from './constants/dropdownList';
// import { BACKEND_API_URL } from '../../constants/api';
import * as S from './Writing.style';

const Writing = () => {
  const [isOpenPostModal, setIsOpenPostModal] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string | null | File>(null);
  const location = useLocation();
  const [imgUrl, setImgUrl] = useState('');
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  const onClearInput = () => {
    if (inputImageRef.current) {
      inputImageRef.current.value = '';
    }
  };
  const onClick = () => {
    try {
      setLoading(true);
      uploadImageFile(image, setImage, setImgUrl);
      alert('피드백 전송을 성공했습니다.');
    } catch (e) {
      alert('피드백 전송에 실패했습니다.');
    } finally {
      setLoading(false);
      onClearInput();
    }
  };

  const { title, content, detailRegion }: Feed = location.state || {} || '';

  const [inputText, setInputText] = useState({
    titleText: title ?? '',
    detailText: content || '',
    pickupPlaceText: detailRegion || '',
  });

  const { titleText, detailText, pickupPlaceText } = inputText;

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setInputText({ ...inputText, [name]: value });
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
  const navigate = useNavigate();

  // FIX: 방 만들때 사용해야 하는 데이터기 때문에 데이터 입력 로직 완성 되면 지우기
  const testRoomData = {
    title: '안녕하세요',
    content: '테스트',
    personnel: 4,
    category: 2,
    regionId: 3,
    detailRegion: '선릉 위워크',
    imageUrl: imgUrl,
    deadline: new Date(Date.UTC(2023, 8, 8, 18, 12, 12)),
  };

  const sucessToPost = () => {
    onClick();

    socket.emit('create-room', testRoomData, (chat: CreateRoom) => {
      handleRoomInfo(chat.title, chat.roomName);
      navigate('/chat');
    });
    unlockScroll();
  };

  const dateDeadLine = new Date(location.state?.deadline);

  const [infoList, setInfoList] = useState({
    category: !location.state?.category
      ? ''
      : CATEGORY_SORT[location.state.category - 1].title,
    personal: !location.state?.personnel ? '' : location.state.personnel,
    year: !location.state?.deadline ? '' : dateDeadLine.getFullYear(),
    month: !location.state?.deadline ? '' : dateDeadLine.getMonth(),
    day: !location.state?.deadline ? '' : dateDeadLine.getDay(),
    hour: !location.state?.deadline ? '' : dateDeadLine.getHours(),
    minute: !location.state?.deadline ? '' : dateDeadLine.getMinutes(),
  });

  const { category, personal, year, month, day, hour, minute } = infoList;

  const selectList = (name: string, value: string | number): void => {
    setInfoList((prev) => ({ ...prev, [name]: value }));
  };

  const activeButton =
    titleText.length > 1 &&
    pickupPlaceText.length > 1 &&
    Object.values(infoList).every((el) => el !== '');

  return (
    <S.Container>
      <S.Remind>
        앞에 (<span>✴︎</span>)표시가 있는 항목은 필수 항목입니다.
      </S.Remind>
      <Title titleText={titleText} handleChangeTitle={onChangeHandler} />
      <S.InfoBox>
        <S.InfoTitle>카테고리</S.InfoTitle>
        <DropDownBox
          width="100%"
          placeholder={category}
          type="category"
          changeValue={selectList}
        />
      </S.InfoBox>

      <Detail detailText={detailText} handleChangeDetail={onChangeHandler} />
      <Upload
        setImage={setImage}
        inputRef={inputImageRef}
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
      />
      <Pickup
        pickupPlaceText={pickupPlaceText}
        handleChangePickupPlace={onChangeHandler}
      />
      <S.InfoBox>
        <S.InfoTitle>인원</S.InfoTitle>
        <DropDownBox
          width="100%"
          placeholder={personal}
          type="personal"
          changeValue={selectList}
        />
      </S.InfoBox>
      {/* 포스트 api나오면 붙일예정 */}
      {/* <button onClick={onClick}>s3 버튼</button> */}

      <S.InfoBox>
        <S.InfoTitle>마감 기한</S.InfoTitle>
        <S.DropDownWrap>
          <DropDownBox
            width="30%"
            placeholder={year}
            type="year"
            changeValue={selectList}
          />
          <DropDownBox
            width="30%"
            placeholder={month}
            type="month"
            changeValue={selectList}
          />
          <DropDownBox
            width="30%"
            placeholder={day}
            type="day"
            changeValue={selectList}
          />
          <DropDownBox
            width="45%"
            placeholder={hour}
            type="hour"
            changeValue={selectList}
          />
          <DropDownBox
            width="45%"
            placeholder={minute}
            type="minute"
            changeValue={selectList}
          />
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
