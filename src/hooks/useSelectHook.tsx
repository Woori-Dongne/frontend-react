import { useState } from 'react';

const useSelectHook = () => {
  const [inputText, setInputText] = useState({
    titleText: '',
    detailText: '',
    pickupPlaceText: '',
  });

  const [selectValue, setSelectValue] = useState({
    selectCategory: '카테고리를 선택해 주세요.',
    selectPersonnel: '인원을 선택해 주세요',
    selectYearDeadline: '연도',
    selectMonthDeadline: '월',
    selectDayDeadline: '일',
    selectHourDeadline: '시간',
    selectMinuteDeadline: '분',
  });

  const [isOpenModal, setIsOpenModal] = useState({
    isOpenYearModal: false,
    isOpenMonthModal: false,
    isOpenDayModal: false,
    isOpenHourModal: false,
    isOpenMinuteModal: false,
    showPostModal: false,
  });

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setInputText({ ...inputText, [name]: value });
  };

  const openYearModal = () => {
    setIsOpenModal({
      ...isOpenModal,
      isOpenYearModal: !isOpenModal.isOpenYearModal,
    });
  };

  const openMonthModal = () => {
    setIsOpenModal({
      ...isOpenModal,
      isOpenMonthModal: !isOpenModal.isOpenMonthModal,
    });
  };
  const openDayModal = () => {
    setIsOpenModal({
      ...isOpenModal,
      isOpenDayModal: !isOpenModal.isOpenDayModal,
    });
  };

  const openHourModal = () => {
    setIsOpenModal({
      ...isOpenModal,
      isOpenHourModal: !isOpenModal.isOpenHourModal,
    });
  };

  const openMinuteModal = () => {
    setIsOpenModal({
      ...isOpenModal,
      isOpenMinuteModal: !isOpenModal.isOpenMinuteModal,
    });
  };

  return {
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
  };
};

export default useSelectHook;
