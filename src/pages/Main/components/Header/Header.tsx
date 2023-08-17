import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Feed } from '../../../../types/feedType';
import Icon from '../../../../components/Icon';
import DropDown from '../../../../components/DropDown/DropDown';
import profile from '../../../../assets/profile.png';
import { CATEGORY_SORT } from '../../../Writing/constants/dropdownList';
import * as S from './Header.styles';

const Header = (props: Feed) => {
  const [openMoreModal, setOpenMoreModal] = useState<boolean>(false);
  const currentUserId = localStorage.getItem('userId') as string;
  const navigate = useNavigate();

  const { category, user, id, userId } = props;

  const openMoreDetail = () => {
    setOpenMoreModal(true);
  };

  const closeMoreDetail = () => {
    setOpenMoreModal(false);
  };

  const checkValue = (value: string | number): void => {
    navigate('/writing', { state: id });
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
            />
          )}
        </S.MoreDetailBox>
      </S.Header>
      {openMoreModal && <S.OutsideModal onClick={closeMoreDetail} />}
    </>
  );
};

export default Header;

const FEED_MENU = [{ id: 1, title: '글 수정하기', color: 'mainBlack' }];
