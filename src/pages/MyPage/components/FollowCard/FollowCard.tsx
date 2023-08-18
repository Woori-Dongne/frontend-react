import { useState } from 'react';
import { BACKEND_API_URL } from '../../../../constants/api';
import { Follow } from '../../../../types/feedType';
import { token } from '../../../../lib/socket';
import Modal from '../../../../components/Modal/Modal';
import defaultProfile from '../../../../assets/profile.png';
import * as S from './FollowCard.style';

interface Props {
  list: Follow;
  handleCategory: (id: number, url: string) => void;
}

const FollowCard = ({ list, handleCategory }: Props) => {
  const [modalList, setModalList] = useState({
    isDeleteFriendModal: false,
    isConfirmModal: false,
  });
  const { id, userName, imageUrl } = list;

  const { isDeleteFriendModal, isConfirmModal } = modalList;

  const deleteFriend = async () => {
    try {
      const response = await fetch(
        `${BACKEND_API_URL}/users/follow/${String(id)}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: null,
        },
      );

      if (response.ok) {
        setModalList({
          isDeleteFriendModal: false,
          isConfirmModal: true,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleConfirm = () => {
    setModalList((prev) => ({
      ...prev,
      isConfirmModal: false,
    }));
    handleCategory(0, '/posts/user');
  };

  return (
    <S.CardBox>
      <S.UserInfoWrap>
        <S.UserImg
          src={imageUrl === null ? defaultProfile : imageUrl}
          alt="profile"
        />
        <S.NickName>{userName}</S.NickName>
      </S.UserInfoWrap>
      <S.DeleteButton
        onClick={() => {
          setModalList((prev) => ({ ...prev, isDeleteFriendModal: true }));
        }}
      >
        X
      </S.DeleteButton>
      {isDeleteFriendModal && (
        <Modal
          type="confirm"
          confirmMessage="정말 친구를 삭제하겠습니까?"
          confirmAction={() => {
            void deleteFriend();
          }}
          cancelAction={() => {
            setModalList((prev) => ({ ...prev, isDeleteFriendModal: false }));
          }}
        />
      )}
      {isConfirmModal && (
        <Modal
          type="goback"
          confirmMessage="삭제가 완료 되었습니다."
          confirmAction={handleConfirm}
        />
      )}
    </S.CardBox>
  );
};

export default FollowCard;
