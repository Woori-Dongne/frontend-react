import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Feed } from '../../../../types/feedType';
import { BACKEND_API_URL } from '../../../../constants/api';
import Icon from '../../../../components/Icon';
import DropDown from '../../../../components/DropDown/DropDown';
import profile from '../../../../assets/profile.png';
import Modal from '../../../../components/Modal/Modal';
import { CATEGORY_SORT } from '../../../Writing/constants/dropdownList';
import * as S from './Header.styles';

const Header = (props: Feed) => {
  const [openMoreModal, setOpenMoreModal] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentUserId = localStorage.getItem('userId') as string;
  const token = localStorage.getItem('accessToken') as string;

  const navigate = useNavigate();

  const { category, user, id, userId } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const openMoreDetail = () => {
    setOpenMoreModal(true);
  };

  const closeMoreDetail = () => {
    setOpenMoreModal(false);
  };

  const checkValue = (value: string | number): void => {
    value === '글 수정하기'
      ? navigate('/writing', { state: id })
      : setIsModalOpen((prev) => !prev);
  };

  const deleteFeed = async () => {
    try {
      const response = await fetch(`${BACKEND_API_URL}/posts/${String(id)}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        alert('글이 삭제되었습니다');
        navigate('/main');
        setIsModalOpen((prev) => !prev);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <S.Header>
        <S.ProfileContainer>
          <S.ProfileImage
            src={user.imageUrl === null ? profile : user.imageUrl}
          />
          <S.ProfileNameBox>
            <S.ProfileNickName>{user.userName}</S.ProfileNickName>
            <S.profileCategory>
              {CATEGORY_SORT[category - 1]?.title}
            </S.profileCategory>
          </S.ProfileNameBox>
        </S.ProfileContainer>
        <S.MoreDetailBox>
          {userId === Number(currentUserId) && (
            <Icon
              name="more"
              width="26.3px"
              height="7px"
              clickAction={openMoreDetail}
            />
          )}
          {openMoreModal && (
            <DropDown
              dropDownList={FEED_MENU}
              clickValue={checkValue}
              width="30%"
              modalRef={modalRef}
              setState={setOpenMoreModal}
            />
          )}
        </S.MoreDetailBox>
      </S.Header>
      {openMoreModal && <S.OutsideModal onClick={closeMoreDetail} />}
      {isModalOpen && (
        <Modal
          type="confirm"
          confirmMessage="정말 글을 삭제하시겠습니까?"
          confirmAction={deleteFeed}
          cancelAction={() => {
            setIsModalOpen((prev) => !prev);
          }}
        />
      )}
    </>
  );
};

export default Header;

const FEED_MENU = [
  { id: 1, title: '글 수정하기' },
  { id: 2, title: '글 삭제하기' },
];
