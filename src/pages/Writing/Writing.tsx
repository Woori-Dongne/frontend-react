import { useNavigate } from 'react-router-dom';
// import Category from './components/Category';
import Detail from './components/Detail/Detail';
import Title from './components/Title/Title';
import Pickup from './components/Pickup/Pickup';
import Upload from './components/Upload/Upload';
// import Personnel from './components/Personnel/Personnel';
import DropDownModal from '../../components/DropDown/DropDownModal';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal';
import useSelectHook from '../../hooks/useSelectHook';
import * as S from './Writing.style';
import DropDownBox from './components/DropDownBox/DropDownBox';
import { useState } from 'react';

const Writing = () => {
  const {
    inputText,
    selectValue,
    isOpenModal,
    onChangeHandler,
    setSelectValue,
    setIsOpenModal,
    openYearModal,
    openMonthModal,
    openDayModal,
    openHourModal,
    openMinuteModal,
  } = useSelectHook();

  const { titleText, detailText, pickupPlaceText } = inputText;

  const {
    // selectCategory,
    // selectPersonnel,
    selectYearDeadline,
    selectMonthDeadline,
    selectDayDeadline,
    selectHourDeadline,
    selectMinuteDeadline,
  } = selectValue;

  const {
    isOpenYearModal,
    isOpenMonthModal,
    isOpenDayModal,
    isOpenHourModal,
    isOpenMinuteModal,
    showPostModal,
  } = isOpenModal;

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.removeProperty('overflow');
  };

  const clickPostButton = () => {
    setIsOpenModal({ ...isOpenModal, showPostModal: true });
    lockScroll();
  };

  const navigate = useNavigate();

  const sucessToPost = () => {
    navigate('/main');
    unlockScroll();
  };

  const [infoList, setInfoList] = useState({
    category: '',
    personal: '',
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
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
      {/* <Category
        selectCategory={selectCategory}
        setSelectCategory={(value: any) => {
          setSelectValue({ ...selectValue, selectCategory: value });
        }}
      /> */}
      <Detail detailText={detailText} handleChangeDetail={onChangeHandler} />
      <Upload />
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

      {/* <Personnel
        selectPersonnel={selectPersonnel}
        setSelectPersonnel={(value: any) => {
          setSelectValue({ ...selectValue, selectPersonnel: value });
        }}
      /> */}
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

      <S.DeadlineBox>
        <S.DeadlineName>
          <span>✴︎</span> 마감 기한
        </S.DeadlineName>
        <S.Deadline>
          <S.DateDeadline>
            <DropDownModal
              width="97px"
              handleOpenModal={openYearModal}
              isOpen={isOpenYearModal}
              stateValue={selectYearDeadline}
              setSelectSort={(value: any) => {
                setSelectValue({
                  ...selectValue,
                  selectYearDeadline: value,
                });
              }}
              name="DEADLINE_YEAR"
            />
            <DropDownModal
              width="97px"
              handleOpenModal={openMonthModal}
              isOpen={isOpenMonthModal}
              stateValue={selectMonthDeadline}
              setSelectSort={(value: any) => {
                setSelectValue({
                  ...selectValue,
                  selectMonthDeadline: value,
                });
              }}
              name="DEADLINE_MONTH"
            />
            <DropDownModal
              width="97px"
              handleOpenModal={openDayModal}
              isOpen={isOpenDayModal}
              stateValue={selectDayDeadline}
              setSelectSort={(value: any) => {
                setSelectValue({
                  ...selectValue,
                  selectDayDeadline: value,
                });
              }}
              name="DEADLINE_DAY"
            />
          </S.DateDeadline>
          <S.TimeDeadline>
            <DropDownModal
              width="149px"
              handleOpenModal={openHourModal}
              isOpen={isOpenHourModal}
              stateValue={selectHourDeadline}
              setSelectSort={(value: any) => {
                setSelectValue({
                  ...selectValue,
                  selectHourDeadline: value,
                });
              }}
              name="DEADLINE_HOUR"
            />
            <DropDownModal
              width="149px"
              handleOpenModal={openMinuteModal}
              isOpen={isOpenMinuteModal}
              stateValue={selectMinuteDeadline}
              setSelectSort={(value: any) => {
                setSelectValue({
                  ...selectValue,
                  selectMinuteDeadline: value,
                });
              }}
              name="DEADLINE_MINUTE"
            />
          </S.TimeDeadline>
        </S.Deadline>
      </S.DeadlineBox>
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
        {showPostModal && (
          <Modal
            type="confirm"
            confirmMessage={
              <>
                해당 내용으로 <br /> 글을 등록할까요?
              </>
            }
            confirmAction={sucessToPost}
            cancelAction={() => {
              setIsOpenModal({ ...isOpenModal, showPostModal: false });
              unlockScroll();
            }}
          />
        )}
      </S.ButtonBox>
    </S.Container>
  );
};

export default Writing;
