import { useState } from 'react';
// import WritingEditModal from '../WritingEditModal/WritingEditModal';
import Icon from '../../../../components/Icon';
import DropDown from '../../../../components/DropDown/DropDown';
import * as S from './Header.styles';

const Header = () => {
  const [openMoreModal, setOpenMoreModal] = useState<boolean>(false);

  const openMoreDetail = () => {
    setOpenMoreModal(true);
  };

  const closeMoreDetail = () => {
    setOpenMoreModal(false);
  };

  const checkValue = (value: string | number): void => {
    console.log(value);
  };

  return (
    <>
      <S.Header>
        <S.ProfileContainer>
          <S.ProfileImage />
          <S.ProfileNameBox>
            <S.ProfileNickName>자허블</S.ProfileNickName>
            <S.profileCategory>카테고리</S.profileCategory>
          </S.ProfileNameBox>
        </S.ProfileContainer>
        <S.MoreDetailBox>
          <Icon
            name="more"
            width="26.3px"
            height="7px"
            clickAction={openMoreDetail}
          />
          {/* {openMoreModal && <WritingEditModal />} */}
          {openMoreModal && (
            <DropDown dropDownList={FEED_MENU} clickValue={checkValue} />
          )}
        </S.MoreDetailBox>
      </S.Header>
      {openMoreModal && <S.OutsideModal onClick={closeMoreDetail} />}
    </>
  );
};

export default Header;

const FEED_MENU = [{ id: 1, title: '글 수정하기', color: 'mainBlack' }];
