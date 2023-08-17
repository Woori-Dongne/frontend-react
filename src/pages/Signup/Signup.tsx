import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BACKEND_API_URL } from '../../constants/api';
import { DetailRegionType, UserAddInfo, UserInput } from './signup.type';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import DropDownBox from '../Writing/components/DropDownBox/DropDownBox';
import * as S from './Signup.style';

const Signup = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [inputInfo, setInputInfo] = useState<UserInput>({
    userName: '',
    region: '',
    phoneNumber: '',
    gender: '',
    imageUrl: '',
  });

  const [detailRegion, setDetailRegion] = useState<DetailRegionType>({
    si: '',
    gu: '',
    dong: '',
  });

  const { userName, region, phoneNumber } = inputInfo;
  const { si, gu, dong } = detailRegion;

  const location = useLocation();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken') as string;
  const isEdit = location.state === 'myPage';

  const getUserInfo = async () => {
    try {
      const response = await fetch(`${BACKEND_API_URL}/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setInputInfo(data);
      relocationRegion(data.region);
    } catch (error) {
      console.error(error);
    }
  };

  const relocationRegion = (region: string) => {
    const si = region.slice(0, 3);
    const gu = region.slice(4, 7);
    const dong = region.slice(8, 11);

    setDetailRegion({ si, gu, dong });
  };

  useEffect(() => {
    if (location.state === 'myPage') void getUserInfo();
  }, [location.state]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (detailRegion.dong !== '') {
      const regionData = si + ' ' + gu + ' ' + dong;
      setInputInfo((prev) => ({ ...prev, region: regionData }));
    } else {
      setInputInfo((prev) => ({ ...prev, region: '' }));
    }
  }, [detailRegion]);

  const selectList = (name: string, value: string | number): void => {
    if (name === 'si')
      setDetailRegion((prev) => ({ ...prev, gu: '', dong: '' }));
    if (name === 'gu') setDetailRegion((prev) => ({ ...prev, dong: '' }));
    setDetailRegion((prev) => ({ ...prev, [name]: String(value) }));
  };

  const validations = {
    userName: userName.length <= 1 || userName.length <= 8,
    region: region.length > 1,
    phoneNumber: phoneNumber.match(/^\d{3}\d{3,4}\d{4}$/),
  };

  const isValidationCheck = Object.values(validations).every((info) => info);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpenModal(isValidationCheck);
  };

  const submitUserInfo = () => {
    const sendUserInfo = async () => {
      try {
        const response = await fetch(`${BACKEND_API_URL}/users`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ ...inputInfo, imageUrl: null }),
        });
        const data = await response.json();
        if (data.id) navigate('/');
      } catch (error) {
        console.error(error);
      }
    };

    void sendUserInfo();
  };

  return (
    <S.Container onSubmit={handleOnSubmit}>
      <S.InputBox>
        {USER_ADD_INFO_LIST.map(
          ({ id, title, placeholder, name }: UserAddInfo) => {
            return (
              <Input
                key={id}
                title={title}
                type="text"
                required={true}
                placeholder={placeholder}
                $inputname={name}
                name={name}
                value={inputInfo[name]}
                onChange={handleInput}
              />
            );
          },
        )}
        <S.RegionBox>
          <S.RegionTitle>주소</S.RegionTitle>
          {REGION_LIST.map((list) => {
            return (
              <DropDownBox
                key={list.id}
                width="30%"
                placeholder={detailRegion[list.type]}
                prevText={detailRegion[list.prevText]}
                type={list.type}
                changeValue={selectList}
              />
            );
          })}
        </S.RegionBox>
      </S.InputBox>
      <Button
        type="submit"
        title={isEdit ? '수정하기' : '회원가입 하기'}
        $border="none"
        $buttonsize="large"
        $buttonbackground={isValidationCheck ? 'mainYellow' : 'disable'}
        $font={isValidationCheck ? 'black' : 'white'}
        disabled={!isValidationCheck}
        onClick={() => {
          setIsOpenModal(true);
        }}
      />
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
          confirmAction={submitUserInfo}
          cancelAction={() => {
            setIsOpenModal((prev) => !prev);
          }}
        />
      )}
    </S.Container>
  );
};

export default Signup;

const USER_ADD_INFO_LIST = [
  {
    id: 1,
    title: '닉네임',
    placeholder: '최대 8글자까지 가능합니다',
    name: 'userName',
  },
  {
    id: 2,
    title: '핸드폰 번호',
    placeholder: '중간에 하이픈(-)없이 입력해주세요 (ex.01012345678)',
    name: 'phoneNumber',
  },
];

const REGION_LIST = [
  {
    id: 1,
    type: 'si',
    prevText: '',
  },
  {
    id: 2,
    type: 'gu',
    prevText: 'si',
  },
  {
    id: 3,
    type: 'dong',
    prevText: 'gu',
  },
];
