import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BACKEND_API_URL } from '../../constants/api';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import * as S from './Signup.style';

const Signup = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [getData, setGetData] = useState({});
  const [inputInfo, setInputInfo] = useState({
    userName: '',
    region: '',
    phoneNumber: '',
  });
  const { userName, region, phoneNumber } = inputInfo;

  // myPage에서 받은 state값 -> edit access token
  const location = useLocation();

  const isEdit = location.state !== null;

  const [editInfo, setEditInfo] = useState({
    userName: isEdit ? location.state.userName : '',
    region: isEdit ? location.state.region : '',
    phoneNumber: isEdit ? location.state.phoneNumber : '',
  });

  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken') as string;

  // 작성되는 인풋값 저장함수
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (isEdit) {
      setEditInfo({
        ...editInfo,
        [name]: value,
      });
    } else {
      setInputInfo({
        ...inputInfo,
        [name]: value,
      });
    }
  };

  // 유효성 검사
  const validationsValue = isEdit ? editInfo : inputInfo;
  const validations = {
    userName:
      validationsValue.userName.length <= 1 ||
      validationsValue.userName.length <= 8,
    region: validationsValue.region.match(
      /^(.*?[시|도])\s*(.*?[시|군|구])\s*(.*?[동|면|읍|리])$/,
    ),
    phoneNumber: validationsValue.phoneNumber.match(/^[0-9]{8,13}$/),
  };

  // 유효성 검사결과
  const isValidationCheck = Object.values(validations).every((info) => info);

  // 통신 함수
  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    const bodyInfo = isEdit
      ? {
          ...editInfo,
          gender: '',
          imageUrl: null,
        }
      : {
          ...inputInfo,
          gender: '',
          imageUrl: null,
        };

    if (isValidationCheck) {
      const postUserInfo = async () => {
        try {
          const response = await fetch(`${BACKEND_API_URL}/users`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(bodyInfo),
          });
          const data = await response.json();
          setGetData(data);
        } catch (error) {
          console.error(error);
        }
      };
      void postUserInfo();
    }
    onClickToggleModal(isOpenModal);
  };

  // 모달창 함수
  const onClickToggleModal = (isOpenModal: boolean): void => {
    setOpenModal(!isOpenModal);
  };

  const success = () => {
    if (Object.keys(getData).length === 0) {
      alert('다시 시도해 주세요!');
    } else {
      navigate('/main');
    }
  };

  const cancel = () => {
    onClickToggleModal(isOpenModal);
  };

  const editButton = isEdit ? '수정하기' : '회원가입 하기';

  return (
    <S.FormContainer onSubmit={handleOnSubmit}>
      <S.InputContainer>
        <S.InputDiv>
          <Input
            title="닉네임"
            type="text"
            required={true}
            placeholder="최대 8글자까지 가능합니다."
            $inputname="userName"
            name="userName"
            value={isEdit ? editInfo.userName : userName}
            onChange={handleInput}
          />
        </S.InputDiv>
        <S.InputDiv>
          <Input
            title="주소"
            type="text"
            required={true}
            placeholder="시,군,구,동까지 입력해주세요."
            $inputname="region"
            name="region"
            value={isEdit ? editInfo.region : region}
            onChange={handleInput}
          />
        </S.InputDiv>
        <S.InputDiv>
          <Input
            title="핸드폰 번호"
            type="text"
            required={true}
            placeholder="중간에 하이픈(-)없이 입력해주세요 (ex.01012345678)"
            $inputname="phoneNumber"
            name="phoneNumber"
            value={isEdit ? editInfo.phoneNumber : phoneNumber}
            onChange={handleInput}
          />
        </S.InputDiv>
      </S.InputContainer>
      {isValidationCheck ? (
        <Button
          type="submit"
          title={editButton}
          $border="none"
          $buttonsize="large"
          $buttonbackground="mainYellow"
          $font="black"
          onClick={handleOnSubmit}
        />
      ) : (
        <Button
          title="회원가입 하기"
          $border="none"
          $buttonsize="large"
          $buttonbackground="disable"
          $font="white"
          onClick={() => {
            alert('입력란을 모두 작성해주세요.');
          }}
        />
      )}
      {isOpenModal && (
        <Modal
          type="confirm"
          confirmMessage={
            <>
              입력한 정보로
              <br />
              {isEdit ? '수정 하시겠습니까?' : '회원가입 하시겠습니까?'}
            </>
          }
          confirmAction={success}
          cancelAction={cancel}
        />
      )}
    </S.FormContainer>
  );
};

export default Signup;
