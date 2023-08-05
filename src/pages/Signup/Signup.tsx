import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_API_URL } from '../../constants/api';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import * as S from './Signup.style';

const Signup = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  // 통신으로 받은 데이터 값
  const [getData, setGetData] = useState({});

  // 인풋값 저장 useState
  const [inputInfo, setInputInfo] = useState({
    userName: '',
    region: '',
    phoneNumber: '',
  });
  const { userName, region, phoneNumber } = inputInfo;

  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken') as string;

  // 작성되는 인풋값 저장함수
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputInfo({
      ...inputInfo,
      [name]: value,
    });
  };

  // 유효성 검사
  const validations = {
    userName: userName.length <= 1 || userName.length <= 8,
    region: region.match(
      /^(.*?[시|도])\s*(.*?[시|군|구])\s*(.*?[동|면|읍|리])$/,
    ),
    phoneNumber: phoneNumber.match(/^[0-9]{8,13}$/),
  };

  const isValidationCheck = Object.values(validations).every((info) => info);

  // 통신 함수
  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    if (isValidationCheck) {
      const postUserInfo = async () => {
        try {
          const response = await fetch(`${BACKEND_API_URL}/users`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              ...inputInfo,
              gender: '',
              imageUrl: null,
            }),
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
            value={userName}
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
            value={region}
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
            value={phoneNumber}
            onChange={handleInput}
          />
        </S.InputDiv>
      </S.InputContainer>
      {isValidationCheck ? (
        <Button
          type="submit"
          title="회원가입 하기"
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
              회원가입 하시겠습니까?
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
