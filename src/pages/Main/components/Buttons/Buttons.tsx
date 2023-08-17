import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal';
import DropDown from '../../../../components/DropDown/DropDown';
import { CATEGORY_SORT } from '../../../Writing/constants/dropdownList';
import * as S from './Button.styles';

const Buttons = () => {
  const [isOpenWritingModal, setIsOpenWritingModal] = useState(false);
  const [isOpenCategoryModal, setIsOpenCategoryModal] = useState(false);

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryParams = (id: number | string, index: number) => {
    searchParams.set('category', index.toString());
    setSearchParams(searchParams);
    setIsOpenCategoryModal(false);
  };

  const setDeadlineParams = () => {
    searchParams.set('sortBy', 'deadLine');
    setSearchParams(searchParams);
  };

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.removeProperty('overflow');
  };

  const openWritingModal = () => {
    setIsOpenWritingModal(true);
    lockScroll();
  };

  const goBack = () => {
    setIsOpenWritingModal(false);
    unlockScroll();
  };

  const goToWritingPage = () => {
    navigate('/writing');
    goBack();
    unlockScroll();
  };

  return (
    <S.ButtonContainer>
      <S.ButtonBox>
        <Button
          title="마감순"
          $border="none"
          $font="black"
          $buttonsize="small"
          $buttonbackground="mainYellow"
          onClick={setDeadlineParams}
        />
        <S.CategoryModalContainer>
          <Button
            $border="none"
            $font="black"
            title="카테고리"
            $buttonsize="small"
            $buttonbackground="mainYellow"
            onClick={() => {
              setIsOpenCategoryModal((prev) => !prev);
            }}
          />
          {isOpenCategoryModal && (
            <DropDown
              dropDownList={CATEGORY_SORT}
              clickValue={(list: string | number, index: number) => {
                handleCategoryParams(list, index);
              }}
              width="inherit"
              $top="125px"
            />
          )}
        </S.CategoryModalContainer>
      </S.ButtonBox>

      <Button
        title="글 작성하기"
        $border="none"
        $font="white"
        $buttonsize="medium"
        $buttonbackground="mainGreen"
        onClick={openWritingModal}
      />

      {isOpenWritingModal && (
        <Modal
          type="confirm"
          confirmMessage={
            <>
              게시물 작성 규칙
              <br />
              <br />
              1 . 상대방에 대한 예의를 갖춘다.
              <br />
              2. 반말 및 욕설을 할 수 없다.
              <br />
              3. 게시글 작성자는 방을 <br /> 나갈수 없다.
              <br />
              <br />
              위의 규칙에 동의 하시나요?
            </>
          }
          cancelAction={goBack}
          confirmAction={goToWritingPage}
        />
      )}
    </S.ButtonContainer>
  );
};

export default Buttons;
