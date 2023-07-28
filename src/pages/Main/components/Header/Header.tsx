import { useState } from 'react';
import WritingEditModal from '../WritingEditModal/WritingEditModal';
import Icon from '../../../../components/Icon';
import * as S from './Header.styles';

const Header = () => {
  const [openMoreModal, setOpenMoreModal] = useState<boolean>(false);

  const openMoreDetail = () => {
    setOpenMoreModal(true);
  };

  const closeMoreDetail = () => {
    setOpenMoreModal(false);
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
          {openMoreModal && <WritingEditModal />}
        </S.MoreDetailBox>
      </S.Header>
      {openMoreModal && <S.OutsideModal onClick={closeMoreDetail} />}
    </>
  );
};

export default Header;
