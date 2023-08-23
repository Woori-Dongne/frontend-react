import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DetailRegionType, UserAddInfo } from './signup.type';
import { GetUserInfo } from '../../service/types';
import { getUserInfo, patchUserInfo } from '../../service/queries';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import DropDownBox from '../Writing/components/DropDownBox/DropDownBox';
import * as S from './Signup.style';

const Signup = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [inputInfo, setInputInfo] = useState<GetUserInfo>({
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
  const isEdit = location.state === 'myPage';

  const setData = async () => {
    const data = await getUserInfo();
    data.imageUrl === null
      ? setInputInfo({ ...data, imageUrl: '' })
      : setInputInfo(data);
    relocationRegion(data.region);
  };

  useEffect(() => {
    if (location.state === 'myPage') void setData();
  }, [location.state]);

  useEffect(() => {
    if (detailRegion.dong !== '') {
      const regionData = si + ' ' + gu + ' ' + dong;
      setInputInfo((prev) => ({ ...prev, region: regionData }));
    } else {
      setInputInfo((prev) => ({ ...prev, region: '' }));
    }
  }, [detailRegion]);

  const relocationRegion = (region: string) => {
    const si = region.slice(0, 3);
    const gu = region.slice(4, 7);
    const dong = region.slice(8, 11);

    setDetailRegion({ si, gu, dong });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputInfo((prev) => ({ ...prev, [name]: value }));
  };

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

  const submitUserInfo = async () => {
    const data = await patchUserInfo({ ...inputInfo, imageUrl: null });
    if (data.id) navigate('/');
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
